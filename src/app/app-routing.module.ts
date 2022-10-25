import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CurriculoComponent } from './views/curriculo/curriculo.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PerfilComponent } from './views/perfil/perfil.component';



const routes: Routes = [
  {
  path: "inicio",
  component: HomeComponent
},

{
  path: "perfil",
  component: PerfilComponent
},

{
  path: "curriculo",
  component: CurriculoComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "cadastro",
  component: CadastroComponent
}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
