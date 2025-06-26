import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CursoDocument = Curso & Document;

@Schema({ versionKey: false })//lo de versionKey false para que no aada el campo __v
export class Curso {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  duracion: number;

  @Prop()
  precio: number;
  
  constructor(nombre?: string, duracion?: number, precio?: number) {
    this.nombre = nombre; 
    this.duracion = duracion;
    this.precio = precio;

  }
}
export const CursoSchema = SchemaFactory.createForClass(Curso);
