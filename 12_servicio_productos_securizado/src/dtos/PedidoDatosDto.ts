//agrupa los datos que se quieren devolver de los pedidos
export class PedidoDatosDto{
    producto:string;
    unidades:number;
    total:number;
    fechaPedido:Date;
    constructor(producto:string, unidades:number, total:number, fechaPedido:Date){
        this.producto = producto;
        this.unidades = unidades;
        this.total = total;
        this.fechaPedido = fechaPedido;
    }
}