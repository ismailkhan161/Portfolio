import { createApp } from '../app.js';
import { connectDatabase } from '../config/db.js';
import { assertRequiredEnv } from '../config/env.js';

const app = createApp();

let dbPromise;

export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: 'Vercel function is working'
  });
}