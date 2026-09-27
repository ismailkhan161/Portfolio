import { env } from '../config/env.js';

// Express identifies error handlers by their four arguments, so `next` must stay.
// eslint-disable-next-line no-unused-vars
export function errorHandler(error, req, res, next) {
  let status = error.status || error.statusCode || 500;
  let message = error.message || 'Internal server error';

  if (error.name === 'ValidationError') {
    status = 400; // Mongoose schema validation
  } else if (error.type === 'entity.parse.failed') {
    status = 400;
    message = 'The request body is not valid JSON.';
  } else if (error.type === 'entity.too.large') {
    status = 413;
    message = 'The request body is too large.';
  } else if (error.code === 'CORS_NOT_ALLOWED') {
    status = 403;
  }

  if (status >= 500) {
    console.error(error);
    // Never leak internals to clients in production.
    if (env.isProduction) message = 'Something went wrong on the server. Please try again later.';
  }

  res.status(status).json({ success: false, message });
}
