export class ClienteDatosDto{
    usuario:string;
    password:string;
    email:string;
    telefono:number;
    // Constructor con parámetros opcionales
    constructor(usuario?: string, password?: string, email?: string, telefono?: number) {
        this.usuario = usuario || '';
        this.password = password || '';
        this.email = email || '';
        this.telefono = telefono || 0;
    }
}