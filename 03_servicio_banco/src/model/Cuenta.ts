export class Cuenta{
    numeroCuenta:string;
    saldo:number;
    titular:string;
    tipo:string;
    constructor(numeroCuenta?:string,saldo?:number,titular?:string,tipo?:string){
        this.numeroCuenta=numeroCuenta;
        this.saldo=saldo;
        this.titular=titular;
        this.tipo=tipo;
    }
}