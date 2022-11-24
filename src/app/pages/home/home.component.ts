import { Component, OnInit } from '@angular/core';
import { MapsServiceService } from 'src/app/service/maps-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = []

  constructor(private mapsService: MapsServiceService,) { }

  ngOnInit(): void {
    //console.log(localStorage.getItem("token"))

    /*this.mapsService.consultarLogin('login').subscribe((result: any) => {
      if(result.result){
        for(let i = 0; i<50; i++){
          this.cards.push(this.mapsService.vaga)
        }

        this.mapsService.objCliente = result;

      }else{
        this.mapsService.deslogar();
      }  
    });*/

    for(let i = 0; i<50; i++){
      this.cards.push(this.mapsService.vaga)
    }
  
  }

  /*async consulta(){
    await this.mapsService.consulta().toPromise()
    .then(
      response =>{
        console.log(response)
      }
    )
    .catch( 
      error => {
        console.log(error)
      }
    ) 
  }
  */
}
