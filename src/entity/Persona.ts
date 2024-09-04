import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Barrio } from "./Barrio";

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  pidioComida!: boolean;

  @ManyToOne(() => Barrio, barrio => barrio.residentes)
  barrio!: Barrio;
}
