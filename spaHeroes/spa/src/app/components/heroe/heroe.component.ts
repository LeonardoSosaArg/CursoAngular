import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activatedRoute : ActivatedRoute,
              private _heroesServie : HeroesService
    ) { 

    this.activatedRoute.params.subscribe( parametros => {
      console.log(parametros['id']);
      this.heroe = this._heroesServie.getHeroe(parametros['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }
  

}
