import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../models/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from '../../models/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  constructor(private api: ApiService, private router:Router) { }

  errorStatus: boolean = false;
  errorMsj : any = "";
  ngOnInit(): void {
    this.checkLocalStorage();
  }


  //FUNCION QUE BUSCA EL ITEM TOKEN DENTRO DEL LOCAL STORAGE
  //SI EXISTE TE DIRECCIONA A LA PAG PRINCIPAL SI NO 
  //TENDRIAS QUE LOGUEARTE
  checkLocalStorage(){
    if (localStorage.getItem('token')) {
      this.router.navigate(['table'])
    }
  }

  onLogin(form: any){
    this.api.loginByEmail(form).subscribe(data =>{
      //DATA RESPONSE ES LA RESPUESTA DE LA API
      let dataResponse: ResponseI = data;
      if (dataResponse.status == "ok") {
        localStorage.setItem("token",dataResponse.result.token);
        this.router.navigate(['table']);
      }
      else{
        this.errorStatus = true;
        //DATA RESPONSE ES LA RESPUESTA DE LA API
        this.errorMsj = dataResponse.result.error_msg;
      }
      console.log(data);
    });
    
  }
}
