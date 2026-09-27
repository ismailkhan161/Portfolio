const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const asTrimmedString = (value) => (typeof value === 'string' ? value.trim() : '');

/** Validates and normalizes the contact form body. Replaces req.body with the cleaned values. */
export function validateContact(req, res, next) {
  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const values = {
    name: asTrimmedString(body.name),
    email: asTrimmedString(body.email),
    message: asTrimmedString(body.message),
  };

  const errors = {};

  if (!values.name) errors.name = 'Enter your name.';
  else if (values.name.length < 2) errors.name = 'Your name must be at least 2 characters.';
  else if (values.name.length > 100) errors.name = 'Your name must be 100 characters or fewer.';

  if (!values.email) errors.email = 'Enter your email address.';
  else if (values.email.length > 254 || !EMAIL_PATTERN.test(values.email))
    errors.email = 'Enter a valid email address, like name@example.com.';

  if (!values.message) errors.message = 'Write a message.';
  else if (values.message.length < 10) errors.message = 'Your message must be at least 10 characters.';
  else if (values.message.length > 2000) errors.message = 'Your message must be 2000 characters or fewer.';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, message: 'Please check the form and try again.', errors });
  }

  req.body = values;
  return next();
}
