import express, { Application, Request, Response } from 'express';
import connectToDatabase from './config/db'; // Importa la función desde db.ts
import 'dotenv/config';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000');

app.use(express.json());

// Conexión a la base de datos MongoDB
connectToDatabase();

// Resto del código sigue igual...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
