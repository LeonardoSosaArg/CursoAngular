import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PacienteI } from '../models/paciente.interface';
import { PacienteAltaI } from '../models/pacienteAlta.interface';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  listaPacientes : PacienteI[] = [];
  private urlBase = "https://api.solodata.es/";

  altaPaciente: PacienteAltaI = {
    nombre: '',
    dni: '',
    correo: '',
    codigoPostal: '',
    genero: '',
    telefono: '',
    fechaNacimiento: '',
    token: ''
  }

  constructor(private api: HttpClient) {
   
   }
  
   getPacientes() : Promise<PacienteI[]>{
     const url = this.urlBase + "pacientes?page=1";

    return new Promise((resolve) => {
      this.api.get<any>(url).subscribe(data =>{
      this.listaPacientes = data
      console.log(this.listaPacientes)
    resolve (this.listaPacientes)})
    })   
   }
   
   postPaciente():Promise<any>{
    console.log(this.altaPaciente);
    const url = this.urlBase + "pacientes";
    return new Promise((resolve) => {
    this.api.post(url,this.altaPaciente).subscribe((resp) => {
      resolve(resp)
      console.log(resp)
    });
  });
  
  }
  


}
