import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';

//IMPORTAR FORMULARIOS
import { FormsModule } from '@angular/forms';
//IMPORTAR HTTP CLIENT
import { HttpClientModule } from '@angular/common/http';
//IMPORTAR SWEET ALERT
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroeComponent,
    ListaHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
