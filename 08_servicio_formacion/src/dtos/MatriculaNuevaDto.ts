export class MatriculaNuevaDto{
    idCurso:number;
    usuario:string;
    constructor(idCurso?:number,usuario?:string){
        this.idCurso=idCurso;
        this.usuario=usuario;
    }
}