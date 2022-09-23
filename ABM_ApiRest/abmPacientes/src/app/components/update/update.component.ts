import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PacientePutI } from '../../models/PacientePut.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  constructor(private router: Router,
    private activeRouter: ActivatedRoute, private api: ApiService) { }

  datosPaciente : PacientePutI[] = [];
  //datosPaciente: any;
  //PUT PACIENTES
  editarForm = new FormGroup({
    nombre: new FormControl(''),
    dni: new FormControl(''),
    correo: new FormControl(''),
    direccion: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero: new FormControl(''),
    telefono: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    token: new FormControl(''),
    pacienteId: new FormControl('')
  });

  ngOnInit(): void {
    let pacienteId = this.activeRouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getEditarPaciente(pacienteId).subscribe(data => {
      this.datosPaciente[0] = data[0];
      console.log(data)
      // this.editarForm.setValue({
      //   'nombre': this.datosPaciente.Nombre,
      //   'dni': this.datosPaciente.DNI,
      //   'correo': this.datosPaciente.Correo,
      //   'direccion': this.datosPaciente.Direccion,
      //   'codigoPostal': this.datosPaciente.CodigoPostal,
      //   'genero': this.datosPaciente.Genero,
      //   'telefono': this.datosPaciente.Telefono,
      //   'fechaNacimiento': this.datosPaciente.FechaNacimiento,
      //   'token': token,
      //   'pacienteId': this.datosPaciente.PacienteId
      // });
      this.editarForm.controls['nombre'].setValue(this.datosPaciente[0].Nombre);
      this.editarForm.controls['dni'].setValue(this.datosPaciente[0].DNI);
      this.editarForm.controls['correo'].setValue(this.datosPaciente[0].Correo);
      this.editarForm.controls['codigoPostal'].setValue(this.datosPaciente[0].CodigoPostal);
      this.editarForm.controls['genero'].setValue(this.datosPaciente[0].Genero);
      this.editarForm.controls['direccion'].setValue(this.datosPaciente[0].Direccion);
      this.editarForm.controls['telefono'].setValue(this.datosPaciente[0].Telefono);
      this.editarForm.controls['fechaNacimiento'].setValue(this.datosPaciente[0].FechaNacimiento);
      console.log(this.editarForm.value);
    })

  }

  postForm(form: PacientePutI){
    console.log(form);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
