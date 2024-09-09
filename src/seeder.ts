import "reflect-metadata"
import { createConnection } from "typeorm"
import { Barrio } from "./entity/Barrio"
import { Persona } from "./entity/Persona"

createConnection().then(async connection => {
    const barrios = [
      { nombre: "Barrio 1" },
      { nombre: "Barrio 2" },
      { nombre: "Barrio 3" },
    ];
  
    const personas = [
      { nombre: "Persona 1", pidioComida: true, barrio: barrios[0] },
      { nombre: "Persona 2", pidioComida: false, barrio: barrios[0] },
      { nombre: "Persona 3", pidioComida: true, barrio: barrios[1] },
      { nombre: "Persona 4", pidioComida: false, barrio: barrios[1] },
      { nombre: "Persona 5", pidioComida: true, barrio: barrios[2] },
      { nombre: "Persona 6", pidioComida: false, barrio: barrios[2] },
    ];
  
    await connection.getRepository(Barrio).save(barrios);
    await connection.getRepository(Persona).save(personas);
  
    console.log("Database seeded successfully");
  }).catch(error => console.error("Error seeding database:", error));