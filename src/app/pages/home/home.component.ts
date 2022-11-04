import { Component, OnInit } from '@angular/core';
import { MapsServiceService } from 'src/app/service/maps-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = []

  constructor(private mapsService: MapsServiceService) { }

  ngOnInit(): void {
    for(let i = 0; i<50; i++){
      this.cards.push(this.mapsService.vaga)
    }
    
  }

}
