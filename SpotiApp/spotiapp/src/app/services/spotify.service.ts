import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

//servicio inyectable
@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCgPhz1xAXTzXkPv9IZn_l-VVkgxLb_Ys6crAhJGvl49MxXpJqHDXBijOFG2lKRGc-NnGHdFDLjulvqidK_DLf2X2cJXymF89-OD69TALWBMjd8vT0'
    });
    return this.http.get(url, { headers })
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data: any) => {
        return data.albums.items;
      }));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=5`)
      .pipe(map((data: any) => {
        return data.artists.items;
      }));

  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map((data: any) => {
      return data['tracks'];
    }));
    
  }
}
