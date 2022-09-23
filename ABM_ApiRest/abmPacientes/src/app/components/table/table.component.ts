import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListaPacientesI } from '../../models/listaPacientes.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  listaPacientes:ListaPacientesI[] = [];

  constructor(private api: ApiService, private router: Router) {

   }

  ngOnInit(): void {
    this.api.getPacientes(1).subscribe(data => {
      this.listaPacientes = data;
      //console.log(data);
    });
  }

  editarPaciente(id: string){
    this.router.navigate(['update',id]);
    this.api.getEditarPaciente(id).subscribe(data =>{
      //console.log(data);
    });
    
  }

  nuevoRegistro(){
    this.router.navigate(['insert']);
  }


}
