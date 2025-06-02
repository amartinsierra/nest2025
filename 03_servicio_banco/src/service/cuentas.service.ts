import { Injectable } from '@nestjs/common';
import { Cuenta } from 'src/model/Cuenta';


@Injectable()
export class CuentasService {
  cuentas: Cuenta[]=[
    new Cuenta ("ES2100123456789012345678", 15230.75, "Carlos Méndez", "Cuenta Corriente"),
    new Cuenta ("ES3200765432109876543210", 840.50, "Laura Sánchez", "Cuenta Ahorro"),
    new Cuenta ("ES4100987654321098765432", 5000.00, "Miguel Torres", "Cuenta Corriente"),
    new Cuenta ("ES5100234567890123456789", 120.90, "Andrea López", "Cuenta Nómina"),
    new Cuenta ("ES6100345678901234567890", 9800.00, "Luis Rodríguez", "Cuenta Empresa"),
    new Cuenta ("ES7200456789012345678901", 320.75, "María González", "Cuenta Ahorro"),
    new Cuenta ("ES8300567890123456789012", 7200.00, "Javier Morales", "Cuenta Corriente"),
    new Cuenta ("ES9400678901234567890123", 210.00, "Patricia Ruiz", "Cuenta Nómina"),
    new Cuenta ("ES0500789012345678901234", 14500.25, "Fernando Gil", "Cuenta Empresa"),
    new Cuenta ("ES1600890123456789012345", 75.10, "Elena Navarro", "Cuenta Ahorro" ),
  ]
  save(cuenta:Cuenta):boolean{
    //si el número de cuenta no existe, entonces se añade la cuenta
    if(!this.cuentas.some(c=>c.numeroCuenta==cuenta.numeroCuenta)){
      this.cuentas.push(cuenta);
      return true;
    }
    return false;
    
  }
  findByNumeroCuenta(numeroCuenta:string):Cuenta{
    return this.cuentas.find(c=>c.numeroCuenta==numeroCuenta);
  }
  findByTipo(tipo:string):Cuenta[]{
    return this.cuentas.filter(c=>c.tipo==tipo);
  }
  findBySaldoMin(saldoMin:number):Cuenta[]{
    return this.cuentas.filter(c=>c.saldo>=saldoMin);
  }
  deleteByNumeroCuenta(numeroCuenta:string):void{
    this.cuentas=this.cuentas.filter(c=>c.numeroCuenta!=numeroCuenta);
  }
}
