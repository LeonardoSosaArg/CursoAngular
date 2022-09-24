import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  private RECURSO: string = 'articulo';
  private API_URL: string = `${environment.apiUrl}/${this.RECURSO}`;

  constructor(private http: HttpClient) {}

  obtener(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.API_URL);
  }

  obtenerPorId(id: string): Observable<Articulo> {
    return this.http.get<Articulo>(`${this.API_URL}/${id}`);
  }

  agregar(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(this.API_URL, articulo);
  }

  modificar(articulo: Articulo): Observable<Articulo> {
    return this.http.put<Articulo>(`${this.API_URL}/${articulo.id}`, articulo);
  }

  eliminar(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
