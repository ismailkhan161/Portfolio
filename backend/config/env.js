import dotenv from 'dotenv';

dotenv.config({ quiet: true });

const isProduction = process.env.NODE_ENV === 'production';

const normalizeOrigin = (origin) => origin.trim().replace(/\/$/, '');

const clientUrls = (process.env.CLIENT_URL || (isProduction ? '' : 'http://localhost:5173'))
  .split(',')
  .map(normalizeOrigin)
  .filter(Boolean);

export const env = {
  isProduction,
  port: Number(process.env.PORT) || 5000,
  mongodbUri: process.env.MONGODB_URI,
  clientUrls,
};

/** Fails fast with a clear message instead of a confusing error later. */
export function assertRequiredEnv() {
  const problems = [];

  if (!env.mongodbUri || env.mongodbUri.startsWith('ADD_')) {
    problems.push('MONGODB_URI is missing. Copy .env.example to .env and set it.');
  }
  if (env.clientUrls.length === 0) {
    problems.push('CLIENT_URL is missing. Set it to your frontend URL so CORS can allow it.');
  }

  if (problems.length > 0) {
    throw new Error(`Invalid environment configuration:\n - ${problems.join('\n - ')}`);
  }
}
