import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { setupRoutes } from "./routes";
const swaggerDocument = require('./swagger_output.json');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());

// Configurar Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Crear conexión con la base de datos
createConnection().then(async connection => {
  // Configurar las rutas
  setupRoutes(app, connection);

  app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
  });
}).catch(error => console.log("Error connecting to the database:", error));

export default app;