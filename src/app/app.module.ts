import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { PerfilComponent } from './views/perfil/perfil.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule}from '@angular/material/input';
import { CurriculoComponent } from './views/curriculo/curriculo.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { PagesModule } from './pages/pages.module';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    CurriculoComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    PagesModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
