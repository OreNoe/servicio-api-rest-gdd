import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Barrio } from "./Barrio";

@Entity({ name: "personas" })
export class Persona {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre", type: "varchar" })
  nombre!: string;

  @Column({ name: "pidio_comida", type: "boolean" })
  pidioComida!: boolean;

  @ManyToOne(() => Barrio, barrio => barrio.residentes)
  @JoinColumn({ name: "barrio_id" })
  barrio!: Barrio;
}
