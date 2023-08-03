import express, { Application, Request, Response } from 'express';
import connectToDatabase from './config/db';
import dotenv from 'dotenv'
import cors from 'cors'

import restaurantRoutes from './routes/restaurantRoutes'
import commentRoutes from './routes/commentRoutes'

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './config/swagger.config';

dotenv.config();

const swaggerSpec = swaggerJsdoc(swaggerOptions);


const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '8080');

app.use(express.json());

connectToDatabase();

app.use(cors());

app.use('/api', restaurantRoutes);
app.use('/api', commentRoutes);
app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
