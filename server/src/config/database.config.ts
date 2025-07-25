import mongoose from 'mongoose';
import config from "./config.ts";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.databaseUri)
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure
  }
}