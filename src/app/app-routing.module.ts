import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CurriculoComponent } from './views/curriculo/curriculo.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { UsuarioNaoAutenticadoGuard } from './service/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './service/usuario-autenticado.guard';



const routes: Routes = [
  { path: 'login', component: LoginComponent,  pathMatch: 'full', canActivate: [UsuarioNaoAutenticadoGuard],},

  { 
    path: '', 
    redirectTo: '/pages/home', 
    pathMatch: 'full' 
  },

  { 
    path: 'pages', 
    redirectTo: '/pages/home', 
    pathMatch: 'full' 
  },

  {
    path: "cadastro",
    component: CadastroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
