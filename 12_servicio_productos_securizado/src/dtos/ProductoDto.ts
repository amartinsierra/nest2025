import { IsInt, IsNumber, IsString, Max, Min } from "class-validator";

export class ProductoDto{
    @IsInt()
    codigoProducto:number;
    @IsString()
    producto:string;
    @IsNumber()
    precioUnitario:number;
    @IsInt()
    @Min(0)
    @Max(10000)
    stock:number;
    constructor(codigoProducto?:number, producto?:string, precioUnitario?:number, stock?:number){
        this.codigoProducto = codigoProducto;
        this.producto = producto;
        this.precioUnitario = precioUnitario;
        this.stock = stock;
    }
}