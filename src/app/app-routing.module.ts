import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticuloAltaComponent } from './articulos/articulo-alta/articulo-alta.component';
import { ArticuloListadoComponent } from './articulos/articulo-listado/articulo-listado.component';
import { ArticuloModificacionComponent } from './articulos/articulo-modificacion/articulo-modificacion.component';

const routes: Routes = [
  { path: 'alta', component: ArticuloAltaComponent },
  { path: 'modificar/:id', component: ArticuloModificacionComponent },
  { path: 'listado', component: ArticuloListadoComponent },
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
