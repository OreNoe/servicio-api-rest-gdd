import { Express } from "express";
import { Connection } from "typeorm";
import { Barrio } from "./entity/Barrio";
import { Persona } from "./entity/Persona";

// Función para configurar las rutas de la aplicación
export const setupRoutes = (app: Express, connection: Connection) => {
  
  // Ruta para obtener el reporte
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

  // Ruta para obtener los barrios
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

  // Ruta para obtener personas con barrios
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
};
