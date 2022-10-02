import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    console.log('Servicio inicializado');
    const lista1 = new Lista('Comprar en Supermercado');
    const lista2 = new Lista('Comprar en Limpieza');

    this.listas.push(lista1,lista2);
    console.log(this.listas);
  }

  crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
  }

}


