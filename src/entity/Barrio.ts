import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Persona } from "./Persona";

@Entity()
export class Barrio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @OneToMany(() => Persona, persona => persona.barrio)
  residentes!: Persona[];
}
