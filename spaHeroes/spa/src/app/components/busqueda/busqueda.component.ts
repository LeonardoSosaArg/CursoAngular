import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroesArray: any[] = [];
  termino:string ='';
  @Input() indice: number = 0;
  
  constructor(private router: Router,
    private _heroesService: HeroesService,
    private _activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedroute.params.subscribe( parametro => {
      this.termino = parametro['termino'];
      this.heroesArray = this._heroesService.buscarHeroes(parametro['termino']);
    })
  }

  verHeroe(id: number) {
    this.router.navigate(['/heroe', this.indice]);
  }
}
