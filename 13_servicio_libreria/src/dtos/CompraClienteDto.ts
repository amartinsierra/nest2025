export class CompraClienteDto {
    usuario:string;
    tituloLibro:string;
    fechaCompra:Date;
    // Constructor con parámetros opcionales
    constructor(usuario?: string, tituloLibro?: string, fechaCompra?: Date) {
        this.usuario = usuario || '';
        this.tituloLibro = tituloLibro || '';
        this.fechaCompra = fechaCompra || new Date();
    }
}