import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  flag = 'settings';
  formularioSenha: FormGroup;
  idiomaValue = 'pt-br';
  idiomas = [
    {value: 'pt-br', viewValue: 'Português (Brasil)'},
    {value: 'en-us', viewValue: 'Inglês (Estados Unidos)'},
    {value: 'es', viewValue: 'Espanhol'},
  ];
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formularioSenha = this.formBuilder.group({
      password: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      newPasswordAgain: [null, [Validators.required]],
    })
  }

  onsubmit(){
    console.log(this.formularioSenha.value)
  }
}
