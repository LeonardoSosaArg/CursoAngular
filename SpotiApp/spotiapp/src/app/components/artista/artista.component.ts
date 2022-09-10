import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  
  artista: any = {};
  loadingArtis: boolean = true;
  tracks: any[] = [];

  constructor(private router : ActivatedRoute,
              private spotify: SpotifyService) 
  { 
    this.loadingArtis = true;
    //obtenemos el parametro id(proveniente de la url) de la ruta ativa actual
    this.router.params.subscribe( params => { 
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

  }
  
  getArtista(id: string){
    this.spotify.getArtista( id ) 
    .subscribe( (artista : any) => {
    console.log(artista);
    this.artista = artista;
    this.loadingArtis = false;
    });
  }
  
  getTopTracks(id: string){
    this.spotify.getTopTracks( id )
    .subscribe(( tracks : any) => {
      this.tracks = tracks;
      console.log(tracks);
    });
  }

}
