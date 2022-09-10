import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioLoginModel } from '../../models/usuarioLogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLoginModel;

  constructor() { }

  ngOnInit() {
    this.usuarioLogin = new UsuarioLoginModel();
  }
  
  login(form: NgForm){
    
    if (form.invalid) {
      return;
    }
    console.log('Registro Enviado');
     console.log(this.usuarioLogin);
     console.log(form);

  }
}
