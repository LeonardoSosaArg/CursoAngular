import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  //recibimos el heroe desde afuera del componente con el decorador
  @Input() heroe: any = {};//inicializo como objeto vacio
  @Input() indice: number = 0;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe() {
    //this.heroeSeleccionado.emit(this.indice);
    this.router.navigate(['/heroe',this.indice]);
  }
}
