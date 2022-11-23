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
  nomeUser = "TESTE"

  ngOnInit(): void {
  }

  redirect(rota){
    this.router.navigate([rota])
    //this.menuFlutuante=true;
  }

  deslogar(){
    this.mapsService.deslogar();
  }
}
