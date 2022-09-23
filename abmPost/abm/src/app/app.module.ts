import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//IMPORTAR FORMULARIOS
import { FormsModule } from '@angular/forms';
//DESPUES AGREGARLOS EN EN IMPORTS
//IMPORTAR HTTP CLIENT
import { HttpClientModule } from '@angular/common/http';
//IMPORTAR SWEET ALERT
import Swal from 'sweetalert2';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { AltaPostComponent } from './components/alta-post/alta-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPostsComponent,
    AltaPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
