export class LibroDatosDto{
    isbn:number;
    titulo:string;
    autor:string;
    precio:number;
    paginas:number;
    // Constructor con parámetros opcionales
    constructor(isbn?: number, titulo?: string, autor?: string, precio?: number, paginas?: number) {
        this.isbn = isbn || 0;
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.precio = precio || 0;
        this.paginas = paginas || 0;
    }
}