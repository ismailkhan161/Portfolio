import { Router } from 'express';
import mongoose from 'mongoose';
import contactRoutes from './contactRoutes.js';
import projectRoutes from './projectRoutes.js';

const router = Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});
router.use('/contact', contactRoutes);
router.use('/projects', projectRoutes);

export default router;
