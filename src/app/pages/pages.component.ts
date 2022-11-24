import { Component, OnInit } from '@angular/core';
import { MapsServiceService } from '../service/maps-service.service';

@Component({
  selector: 'app-pages',
  template: `<div style="min-height: 100%; position: relative;">
    <app-header></app-header>
            <router-outlet></router-outlet>
        <app-footer></app-footer></div>
  `,
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private mapsService: MapsServiceService) { }

  async ngOnInit() {
    //console.log("aqui")
    await this.mapsService.consulta().toPromise()
    .then(
      response =>{
        //console.log(response)
        //@ts-ignore
        this.mapsService.objClienteBase = response.response;
      }
    )
    .catch( 
      error => {
        //console.log(error)
        this.mapsService.deslogar();
      }
    )
  }
}
