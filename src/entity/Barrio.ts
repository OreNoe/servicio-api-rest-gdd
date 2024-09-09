import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Persona } from "./Persona";

@Entity({ name: "barrios" })
export class Barrio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre", type: "varchar" })
  nombre!: string;

  @OneToMany(() => Persona, persona => persona.barrio)
  residentes!: Persona[];
}
