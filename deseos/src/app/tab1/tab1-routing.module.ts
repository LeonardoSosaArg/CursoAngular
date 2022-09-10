import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {//AGREGAMOS LA RUTA HIJA PARA RANDERIZAR EL NUEVO COMPONENTE DENTRO
    path: 'agregar',
    loadChildren: () => import('../agregar/agregar.module').then( m => m.AgregarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
