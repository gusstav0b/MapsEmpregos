import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import {MatInputModule}from '@angular/material/input';
import { PagesComponent } from "./pages.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { PagesRoutingModule } from "./pages-routing.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
    imports:[
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatGridListModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        PagesRoutingModule,
        MatCardModule,
    ],
    declarations:[
        PagesComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [PagesComponent]
})
export class PagesModule {}