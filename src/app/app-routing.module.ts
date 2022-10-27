import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CurriculoComponent } from './views/curriculo/curriculo.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PerfilComponent } from './views/perfil/perfil.component';



const routes: Routes = [
  { 
      path: '', 
    redirectTo: 'pages', 
    pathMatch: 'full' 
  },
  {
    path: "pages",
    component: PagesComponent
  },
  {
    path: "login",
    component: LoginComponent
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
