import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPostComponent } from './components/alta-post/alta-post.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

const routes: Routes = [
  {path:'lista', component: ListaPostsComponent},
  {path:'altaPost', component: AltaPostComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
