export const MESSAGE_MIN = 10;
export const MESSAGE_MAX = 2000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns an object of { field: message } for every invalid field. */
export function validateContact({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Enter your name.';
  else if (name.trim().length < 2) errors.name = 'Your name must be at least 2 characters.';

  if (!email.trim()) errors.email = 'Enter your email address.';
  else if (!EMAIL_PATTERN.test(email.trim())) errors.email = 'Enter a valid email address, like name@example.com.';

  if (!message.trim()) errors.message = 'Write a message.';
  else if (message.trim().length < MESSAGE_MIN)
    errors.message = `Your message must be at least ${MESSAGE_MIN} characters.`;
  else if (message.trim().length > MESSAGE_MAX)
    errors.message = `Your message must be ${MESSAGE_MAX} characters or fewer.`;

  return errors;
}
