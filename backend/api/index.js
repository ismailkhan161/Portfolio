import { createApp } from '../app.js';
import { connectDatabase } from '../config/db.js';
import { assertRequiredEnv } from '../config/env.js';

let app;
let dbConnection;

async function handler(req, res) {
  assertRequiredEnv();

  if (!app) {
    app = createApp();
  }

  if (!dbConnection) {
    dbConnection = connectDatabase();
  }

  await dbConnection;

  return app(req, res);
}

export default handler;