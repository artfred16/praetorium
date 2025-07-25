import mongoose from 'mongoose';
import config from "./config";

export const connectDB = () => {
  try {
    return mongoose.connect(config.databaseUri)
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure
  }
}