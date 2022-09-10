import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  heroesArray: Heroe[] = [];
  constructor( private _servicioHeroes: HeroesService,
              private router: Router  ) { }

  ngOnInit(): void {
  }
  
  buscarHeroe(nombre: string){
    
    this.router.navigate(['/busqueda',nombre]);
    this.heroesArray = this._servicioHeroes.buscarHeroes(nombre);

    console.log(this.heroesArray);
    
  }
}
