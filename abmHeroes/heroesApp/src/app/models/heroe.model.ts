export class HeroeModel{

    id?: string;
    nombre: string;
    poder: string;
    vivo: boolean;

    constructor(){
        //CUANDO CREE UN HEROE NUEVO, POR DEFECTO VIVO VA A SER TRUE
        this.vivo = true;
    }
}