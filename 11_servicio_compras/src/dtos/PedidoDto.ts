export class PedidoDto{
    producto:string;
    unidades:number;
    constructor(producto?:string, unidades?:number){
        this.producto = producto;
        this.unidades = unidades;
    }
}