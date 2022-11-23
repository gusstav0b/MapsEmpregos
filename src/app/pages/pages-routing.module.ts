import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from '../views/perfil/perfil.component';
import { CurriculoComponent } from '../views/curriculo/curriculo.component';
import { UsuarioAutenticadoGuard } from '../service/usuario-autenticado.guard';


const routes: Routes = [
  { path: 'pages', component: PagesComponent, canActivate: [UsuarioAutenticadoGuard],

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
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
