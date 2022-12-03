import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapsServiceService } from 'src/app/service/maps-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private mapsService: MapsServiceService) { }

  menuFlutuante = false;
  nomeUser = this.mapsService.objClienteBase.user;

  ngOnInit(): void {
    setTimeout(() =>{
      this.nomeUser = this.mapsService.objClienteBase.user;
    }, 300)
  }

  ngAfterViewInit(){
    /*this.nomeUser = this.mapsService.objClienteBase.user;*/
  }

  redirect(rota){
    this.router.navigate([rota])
    //this.menuFlutuante=true;
  }

  deslogar(){
    this.mapsService.deslogar();
  }
}
