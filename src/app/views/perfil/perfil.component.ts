import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MapsServiceService } from 'src/app/service/maps-service.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  flag = 'settings';
  formularioSenha: FormGroup;
  objUserPerfil = JSON.parse("{}");
  objUserPerfilDefault = JSON.parse("{}");
  idiomas = [
    {value: 'pt-br', viewValue: 'Português (Brasil)'},
    {value: 'en-us', viewValue: 'Inglês (Estados Unidos)'},
    {value: 'es', viewValue: 'Espanhol'},
  ];
  constructor(private formBuilder : FormBuilder, private mapsService: MapsServiceService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    //this.objUserPerfil.idioma = 'pt-br';
    this.formularioSenha = this.formBuilder.group({
      password: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      newPasswordAgain: [null, [Validators.required]],
    })

    setTimeout(() =>{
      this.mapsService.consultaCliente().toPromise()
      .then(
        response =>{
          //@ts-ignore
          if(response.response){
            //@ts-ignore
            this.objUserPerfil = JSON.parse(JSON.stringify(response.response));
            //@ts-ignore
            this.objUserPerfilDefault = JSON.parse(JSON.stringify(response.response));
            this.objUserPerfil.user = this.mapsService.objClienteBase.user;
            this.objUserPerfil.userDefault = this.mapsService.objClienteBase.user;
            this.objUserPerfil.email = this.mapsService.objClienteBase.email;
            this.objUserPerfil.emailDefault = this.mapsService.objClienteBase.email;
            this.objUserPerfil.idioma =  this.objUserPerfil.idioma ? this.objUserPerfil.idioma : 'pt-br';
            this.objUserPerfilDefault.idioma = this.objUserPerfilDefault.idioma ? this.objUserPerfilDefault.idioma : 'pt-br';
          }
        }
      )
      .catch(
        error =>{
        }
      )
    }, 300);
  }

  async onsubmit(){
    let objPassword = this.formularioSenha.value;
    if(objPassword.newPassword == objPassword.newPasswordAgain){
      let objAttPassword = {
        newPassword: objPassword.newPassword
      }

      let objAttPasswordTeste = {
        password: objPassword.password
      }
      //ATUALIZA SENHA

      await this.mapsService.testePass(objAttPasswordTeste).toPromise()
      .then(
      response =>{
        //@ts-ignore
        if(response.mensagem=="CONFERE"){
          this.mapsService.atualizaSenha(objAttPassword).toPromise()
          .then(
          response =>{
            //@ts-ignore
            this.snackBar.open(response.mensagem, "Fechar", {duration: 3000});
          }
        )
        .catch(
          error =>{
          }
        )
        }
      }
    )
    .catch(
      error =>{
        this.snackBar.open(error.error.mensagem, "Fechar", {duration: 3000});
      }
    )
    }
    else{
      this.snackBar.open("NOVA SENHA NÃO CONFERE", "Fechar", {duration: 3000});
    }
    
  }

  async enviarAlteracoesInfo(){
    if((this.objUserPerfil.user != this.objUserPerfil.userDefault) || (this.objUserPerfil.email != this.objUserPerfil.emailDefault)){
      //atualizar login
      await this.mapsService.atualizaLogin(this.objUserPerfil).toPromise()
    .then(
      response =>{
        //@ts-ignore
        if(response.token){
          localStorage.clear();
          //@ts-ignore
          localStorage.setItem('token', response.token);
        }
      }
    )
    .catch(
      error =>{
      }
    )
    }
    //atualizar cliente
    await this.mapsService.atualizaCliente(this.objUserPerfil).toPromise()
    .then(
      response =>{
        //@ts-ignore
        if(response.mensagem){
          //@ts-ignore
          this.snackBar.open(response.mensagem, "Fechar", {duration: 3000});
          //window.location.reload();
        }
      }
    )
    .catch(
      error =>{
        if(error.error.mensagem){
          this.snackBar.open(error.error.mensagem, "Fechar", {duration: 3000});
        }
        if(error.error.error.sqlMessage){
          this.snackBar.open(error.error.error.sqlMessage.includes("user") ? 'Usuário já cadastrado' : error.error.error.sqlMessage.includes("email") ? 'Email já cadastrado' : '', "Fechar", {duration: 3000});
        }
      }
    )
  }

  descartar(){
    this.objUserPerfil = JSON.parse(JSON.stringify(this.objUserPerfilDefault));
  }
}
