import { createApp } from '../app.js';
import { connectDatabase } from '../config/db.js';
import { assertRequiredEnv } from '../config/env.js';

const app = createApp();

let dbPromise;

export default async function handler(req, res) {
  assertRequiredEnv();

  if (!dbPromise) {
    dbPromise = connectDatabase();
  }

  await dbPromise;

  return app(req, res);
}