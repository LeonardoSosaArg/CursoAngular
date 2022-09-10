import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  frase: any ={
    texto: 'Un gran poder conlleva una gran responsabilidad',
    autor: 'Ben Parker'
  };
  
  personajes : string[] = ['Spiderman','Venon',"Ironman"];

  mostrar = true;
  constructor() { }

  ngOnInit(): void {
  }

}
