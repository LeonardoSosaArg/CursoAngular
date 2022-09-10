import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { PaisesComponent } from './components/paises/paises.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'paises', component: PaisesComponent},
    {path: 'artist/:id', component: ArtistaComponent},
    {path:'', pathMatch: 'full', redirectTo: 'home'},
    {path:'**', pathMatch: 'full', redirectTo: 'home'}
];