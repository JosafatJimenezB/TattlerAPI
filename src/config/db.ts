import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURI: string | undefined = process.env.MONGODB_URI;

if (!dbURI) {
  throw new Error('No se ha proporcionado la URI de la base de datos en la variable de entorno DB_URI.');
}

const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectToDatabase;
