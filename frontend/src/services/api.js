const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

// Free hosting tiers can take a while to wake a sleeping server.
const REQUEST_TIMEOUT_MS = 30000;

export class ApiError extends Error {
  constructor(message, { status = 0, fieldErrors = {} } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

async function request(path, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      signal: controller.signal,
    });

    let payload = null;

    try {
      payload = await response.json();
    } catch {
      // non-JSON response
    }

    if (!response.ok) {
      throw new ApiError(
        payload?.message || 'The server could not process your request.',
        {
          status: response.status,
          fieldErrors: payload?.errors || {},
        }
      );
    }

    return payload;
  } catch (error) {
    if (error instanceof ApiError) throw error;

    if (error.name === 'AbortError') {
      throw new ApiError(
        'The server took too long to respond. Please try again.'
      );
    }

    throw new ApiError(
      'Could not reach the server. Check your connection and try again.'
    );
  } finally {
    clearTimeout(timer);
  }
}

export const getProjects = async () => {
  const response = await request('/api/projects');
  return response.data;
};

export const sendContactMessage = (data) =>
  request('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });