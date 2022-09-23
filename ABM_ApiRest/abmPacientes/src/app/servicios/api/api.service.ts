import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPacientesI } from '../../models/listaPacientes.interface';
import { PacienteI } from '../../models/Paciente.interface';
import { PacientePutI } from 'src/app/models/PacientePut.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlBase: string = "https://api.solodata.es/";

  constructor(private http: HttpClient) {

  }

  //OBLIGAMOS AL METODO MEDIANTE LA INTERFAZ DE LOGIN
  //A TENER OBLIGATORIAMENTE UN USUARIO Y PASSWORD
  //VA A RETORNTAR (OBSERVABLE) UNA INTERFAZ DEL TIPO RESPONSE I
  loginByEmail(form: LoginI): Observable<ResponseI> {

    let direccion = this.urlBase + 'auth';
    return this.http.post<ResponseI>(direccion, form);

  }

  getPacientes(numeroPagina:number): Observable<ListaPacientesI[]>{
    
    let direccion = this.urlBase + 'pacientes?page=' + numeroPagina;
    return this.http.get<ListaPacientesI[]>(direccion);
  }

  getEditarPaciente(id: any): Observable<PacientePutI[]>{
    let direccion = this.urlBase + 'pacientes?id=' + id;
    return this.http.get<PacientePutI[]>(direccion);
  }
}
