import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private RECURSO: string = 'categoria';
  private API_URL: string = `${environment.apiUrl}/${this.RECURSO}`;

  constructor(private http: HttpClient) {}

  obtener(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.API_URL);
  }
}
