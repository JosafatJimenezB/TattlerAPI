import express, { Application, Request, Response } from 'express';
import connectToDatabase from './config/db';
import 'dotenv/config';
import apiRouter from './routes/restaurantRoutes' // Importa la función desde db.ts
import cors from 'cors'

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000');

app.use(express.json());

connectToDatabase();

app.use(cors());

app.use('/api', apiRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
