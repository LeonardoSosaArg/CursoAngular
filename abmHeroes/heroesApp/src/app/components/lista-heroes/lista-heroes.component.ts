import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css']
})
export class ListaHeroesComponent implements OnInit {

  listaHeroes: HeroeModel[] = [];
  cargando = false;
  

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.heroesService.getHeroes()
      .subscribe(data => {
        this.listaHeroes = data;
        this.cargando = false;
      })
  }


  borrarHeroe(heroe: HeroeModel, i: number) {
    Swal.fire({
      title: `Está seguro que sea borrar a ${heroe.nombre}?`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroesService.borrarHeroe(heroe.id).subscribe(data => {
          console.log(heroe.id);
        })
        this.listaHeroes.splice(i, 1);
      }
    })
  }


}
