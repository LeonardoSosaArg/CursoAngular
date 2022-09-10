import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Leonardo';
  nombre2: string = 'leOnArdO sOsA';

  videoUrl: string = "https://www.youtube.com/embed/G-jKlhaA1_k";
  array = [1,2,3,4,5,6,7,8,9,10];

  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('llego la Data')
    }, 4500);
  });
  
  idioma: string = 'fr';

  cambiarIdioma(idio: string){
    this.idioma = idio;
  }

  fecha: Date = new Date();
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;

  heroe = {
    nombre: 'Leo',
    clave: 'Messi',
    edad: '33',
    direccion:{
      calle: 'Psg',
      pais: 'Paris'
    }
  }
}
