import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { Barrio } from "./entity/Barrio";
import { Persona } from "./entity/Persona";

createConnection().then(async connection => {
  const app = express();
  app.use(express.json());

  app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
  });

  app.get("/reporte", async (req, res) => {
    console.log("GET /reporte");
    try {
      const Barrios = await connection.getRepository(Barrio)
        .createQueryBuilder("barrios")
        .leftJoinAndSelect("barrios.residentes", "persona", "persona.pidioComida = :pidio", { pidio: true })
        .getMany();

      const report = Barrios.map(Barrio => ({
        barrio: Barrio.nombre,
        cantidad: Barrio.residentes.length,
        personas: Barrio.residentes.map(Persona => Persona.nombre),
      }));

      res.json(report);
    } catch (error) {
      console.error("Error fetching daily reports:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Get barrios
  app.get("/barrios", async (req, res) => {
    console.log("GET /barrios");
    try {
      const barrios = await connection.getRepository(Barrio).find();
      res.json(barrios);
    } catch (error) {
      console.error("Error fetching barrios:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Get personas  con barrios
  app.get("/personas", async (req, res) => {
    console.log("GET /personas");
    try {
      const personas = await connection.getRepository(Persona).find({ relations: ["barrio"] });
      res.json(personas);
    } catch (error) {
      console.error("Error fetching personas:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

}).catch(error => console.log("Error connecting to the database:", error));
