"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
exports.swaggerOptions = {
    openapi: "3.0.0",
    definition: {
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
            {
                url: "https://tattler-api.vercel.app",
                description: "Servidor desplegado",
            },
        ],
    },
    basePath: "/",
    apis: ["./src/routes/*.ts"],
};
//# sourceMappingURL=swagger.config.js.map