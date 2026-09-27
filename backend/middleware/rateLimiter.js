import rateLimit from 'express-rate-limit';

/** Keeps the public contact endpoint from being flooded. */
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { success: false, message: 'Too many messages sent. Please try again in a few minutes.' },
});
