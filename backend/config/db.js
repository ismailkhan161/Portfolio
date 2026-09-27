import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDatabase() {
  mongoose.connection.on('disconnected', () => console.warn('MongoDB disconnected'));
  mongoose.connection.on('error', (error) => console.error('MongoDB error:', error.message));

  await mongoose.connect(env.mongodbUri, { serverSelectionTimeoutMS: 10000 });
  console.log(`MongoDB connected (database: ${mongoose.connection.name})`);
}

export async function disconnectDatabase() {
  await mongoose.connection.close();
}
