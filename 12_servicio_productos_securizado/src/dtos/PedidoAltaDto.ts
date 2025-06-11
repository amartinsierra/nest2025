import { IsInt, IsString } from "class-validator";

export class PedidoAltaDto{
    @IsString()
    producto:string;
    @IsInt()
    unidades:number;
    constructor(producto:string, unidades:number){
        this.producto = producto;
        this.unidades = unidades;
    }
}