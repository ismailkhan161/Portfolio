import { Router } from 'express';
import { createContactMessage } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';
import { validateContact } from '../middleware/validateContact.js';

const router = Router();

router.post('/', contactLimiter, validateContact, createContactMessage);

export default router;
