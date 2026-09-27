import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { env } from './config/env.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';
import routes from './routes/index.js';

export function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.set('trust proxy', 1); // correct client IPs (for rate limiting) behind a hosting proxy

  app.use(helmet());
  app.use(
    cors({
      origin(origin, callback) {
        // No Origin header = same-origin, curl, or a health check; browsers always send one.
        if (!origin || env.clientUrls.includes(origin)) return callback(null, true);
        const error = new Error('Origin not allowed by CORS');
        error.code = 'CORS_NOT_ALLOWED';
        return callback(error);
      },
      methods: ['GET', 'POST'],
    }),
  );
  app.use(express.json({ limit: '10kb' }));

  app.use('/api', routes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
