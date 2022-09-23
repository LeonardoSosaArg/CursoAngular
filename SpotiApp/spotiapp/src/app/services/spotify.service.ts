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
      'Authorization': 'Bearer BQD_Rd-9QjYj6HlburalxLnIboTq2HUGjgwlvKKOfKmd9QEz1XrmtjRALJ6vHsrfFJhAXQ9wD0UQG0GFUgg-UJpZpVstxwP48SUPlb4EjTUiDTD5sX0'
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
