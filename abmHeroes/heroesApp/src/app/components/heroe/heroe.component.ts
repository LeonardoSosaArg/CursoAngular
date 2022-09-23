import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor(private heroesService: HeroesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id !== 'nuevo') {
      this.heroesService.getHeroe(id)
        .subscribe( (data: HeroeModel ) => {
          this.heroe = data;
          this.heroe.id = id?.toString();
        })

    }
  }

  //#region BOTON GUARDAR
  guardar(form: NgForm) {

    if (form.invalid) {
      console.log('Formulario no válido')
      return;
    }

    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this.heroesService.actualizarHeroe(this.heroe);
    }
    else {
      peticion = this.heroesService.crearHeroe(this.heroe);
    };

    peticion.subscribe(resp => {
      Swal.fire(
        `${this.heroe.nombre}`,
        'Se actualizo correctamente',
        'success',
      );
    })

  }
  //#endregion


}


