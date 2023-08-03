import express, { Application, Request, Response } from 'express';
import connectToDatabase from './config/db';

import 'dotenv/config';
import cors from 'cors'

import restaurantRoutes from './routes/restaurantRoutes'
import commentRoutes from './routes/commentRoutes'

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000');

app.use(express.json());

connectToDatabase();

app.use(cors());

app.use('/api', restaurantRoutes);
app.use('/api', commentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
