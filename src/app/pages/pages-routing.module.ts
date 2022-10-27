import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from '../views/perfil/perfil.component';
import { CurriculoComponent } from '../views/curriculo/curriculo.component';


const routes: Routes = [{
  path: 'pages',
  component: PagesComponent,
  children: [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'profile',
        component: PerfilComponent,
    },
    {
        path: 'curriculo',
        component: CurriculoComponent,
    },
    { 
        path: 'login', 
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    { 
        path: 'cadastro', 
        redirectTo: '/cadastro', 
        pathMatch: 'full' 
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
