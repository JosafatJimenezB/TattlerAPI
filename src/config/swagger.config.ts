import { SwaggerDefinition } from "swagger-jsdoc";
import { SwaggerOptions } from "swagger-ui-express";

export const swaggerOptions: SwaggerOptions = {
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
  basePath: "/",
  apis: ["./src/routes/*.ts"],
}