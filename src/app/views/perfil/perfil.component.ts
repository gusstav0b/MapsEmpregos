import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MapsServiceService } from 'src/app/service/maps-service.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  flag = 'settings';
  formularioSenha: FormGroup;
  idiomaValue = 'pt-br';
  objUserPerfil = JSON.parse("{}");
  idiomas = [
    {value: 'pt-br', viewValue: 'Português (Brasil)'},
    {value: 'en-us', viewValue: 'Inglês (Estados Unidos)'},
    {value: 'es', viewValue: 'Espanhol'},
  ];
  constructor(private formBuilder : FormBuilder, private mapsService: MapsServiceService) { }

  ngOnInit(): void {
    this.formularioSenha = this.formBuilder.group({
      password: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      newPasswordAgain: [null, [Validators.required]],
    })

    setTimeout(() =>{
      this.objUserPerfil.userName = this.mapsService.objClienteBase.user;
      this.objUserPerfil.userEmail = this.mapsService.objClienteBase.email;
    }, 300)
  }

  onsubmit(){
    console.log(this.formularioSenha.value);
  }

  enviarAlteracoesInfo(){
    console.log(this.objUserPerfil);
  }
}
