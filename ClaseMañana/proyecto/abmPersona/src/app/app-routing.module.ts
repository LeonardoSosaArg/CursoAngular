import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPersonaComponent } from './components/alta-persona/alta-persona.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';

const routes: Routes = [
  {path:'listado', component:ListadoPersonasComponent},
  {path:'alta', component:AltaPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
