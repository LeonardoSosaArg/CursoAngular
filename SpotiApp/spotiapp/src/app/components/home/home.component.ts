import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  mensajeError: string = "";

  constructor(private spotify: SpotifyService) { 
     
    this.loading = true;//LOADGIN ACTIVADO CUANDO SE ESTA CARGANDO LA INFO
    
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
    console.log(data);
    this.nuevasCanciones = data;
    this.loading = false;//CUANDO SE TERMINO DE DESCARGAR DESAPARECE
    }, (errorServicio) => {
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
      // console.log(errorServicio.error.error.message);
    });

  }

  ngOnInit(): void {
  }

}
