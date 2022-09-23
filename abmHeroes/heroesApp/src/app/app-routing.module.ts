import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';


const routes: Routes = [
  {path:'lista', component: ListaHeroesComponent},
  {path:'heroe/:id', component: HeroeComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
