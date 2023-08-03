import express, { Application, Request, Response } from 'express';
import connectToDatabase from './config/db';

import 'dotenv/config';
import cors from 'cors'

import restaurantRoutes from './routes/restaurantRoutes'
import commentRoutes from './routes/commentRoutes'
import path from 'path';

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000');

app.use(express.json());

connectToDatabase();

app.use(cors());

const options = {
  openapi: "3.0.0",
  definition:{
    info: {
      title: "Tattler API - Recomendacion de restaurantes",
      version: "1.0.0",
      description: "Documentacion de la API para los restaurantes y los comentarios",
    },
    servers: [
      {
        url: "http://localhost:${PORT}",
        description: "Servidor local"
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerSpec)));


app.use('/api', restaurantRoutes);
app.use('/api', commentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
