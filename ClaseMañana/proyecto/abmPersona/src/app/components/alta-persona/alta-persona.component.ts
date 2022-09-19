import { Component, OnInit, EventEmitter, Output, NgModule } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'
import { PacienteService } from '../../services/paciente.service'

@Component({
  selector: 'app-alta-persona',
  templateUrl: './alta-persona.component.html',
  styleUrls: ['./alta-persona.component.css']
})
export class AltaPersonaComponent implements OnInit {

  persona: Persona;
  formPaciente : FormGroup = this.form.group({
    nombre: ['',Validators.required],
    dni : ['',Validators.required],
    correo : ['',Validators.required],
    codigoPostal : [''],
    genero : [''],
    telefono : [''],
    fechaNacimiento: ['']
  })

  constructor( private service: PacienteService, 
              private form: FormBuilder) {}

  ngOnInit(): void {
    this.persona = new Persona();

  }

  guardar(){
    if (this.formPaciente.valid) {
      this.service.altaPaciente.nombre = this.formPaciente.get('nombre')?.value;
      this.service.altaPaciente.dni = this.formPaciente.get('dni')?.value;
      this.service.altaPaciente.correo = this.formPaciente.get('correo')?.value;

      this.service.postPaciente();
    }
    
    
  }
}
