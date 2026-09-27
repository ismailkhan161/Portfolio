import { createApp } from './app.js';
import { connectDatabase, disconnectDatabase } from './config/db.js';
import { assertRequiredEnv, env } from './config/env.js';

async function start() {
  assertRequiredEnv();
  await connectDatabase();

  const server = createApp().listen(env.port, () => {
    console.log(`API listening on port ${env.port} (${env.isProduction ? 'production' : 'development'})`);
  });

  const shutdown = (signal) => {
    console.log(`${signal} received, shutting down`);
    server.close(async () => {
      await disconnectDatabase();
      process.exit(0);
    });
  };
  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

start().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
