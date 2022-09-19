import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { PacienteI } from '../../models/paciente.interface';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

listado: PacienteI[];

  constructor(private router: Router, 
              private service: PacienteService) { }

  ngOnInit(): void {
    this.service.getPacientes().then((lista) =>{
      this.listado = lista;
    })
    console.log(this.listado);
  }

  nuevaPersona(){
    this.router.navigate(['alta']);
  }

  mostrarOcultar(){
   let table = document.getElementById('table') 
   table?.hidden;
  }
}
