import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  flag = 'settings';
  idiomaValue = 'pt-br';
  idiomas = [
    {value: 'pt-br', viewValue: 'Português (Brasil)'},
    {value: 'en-us', viewValue: 'Inglês (Estados Unidos)'},
    {value: 'es', viewValue: 'Espanhol'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
