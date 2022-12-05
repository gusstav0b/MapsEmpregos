import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MapsServiceService } from 'src/app/service/maps-service.service';


@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent implements OnInit {

    flag = 'settings';'conecct';
    formularioSenha: FormGroup;
    objUserPerfil = JSON.parse("{}");
    idiomas = [
      {value: 'pt-br', viewValue: 'Português (Brasil)'},
      {value: 'en-us', viewValue: 'Inglês (Estados Unidos)'},
      {value: 'es', viewValue: 'Espanhol'},
    ];
    constructor(private formBuilder : FormBuilder, private mapsService: MapsServiceService, private snackBar: MatSnackBar, private router: Router) { }
  informacaoXp=[{
    nomeInstituicao:'Unifacs',
    nome:'Estagiario de Desenvolvimento',
    dataFim: '2022-12-05',
    dataInicio:'2021-03-05',
    infoAd:'Estagiario que realisa tarefas de desenvolvimento nos sistemas da faculdade UNIFACS'
  },
  {
    nomeInstituicao:'Atacadão',
    nome:'estagiario de T.I',
    dataFim: '2021-02-24',
    dataInicio: '2019-04-24',
    infoAd:'Estagiario de T.I que fazia o papel de suporte'
  }]
  informacao=[{
    nomeInstituicao:'Unifacs',
    nome:'Ciencias da Computação',
    dataFim: '2022-12-05',
    dataInicio:'2019-02-14',
    infoAd:'Estudante de Ciencias da Computação na Unifacs'
  },
  {
    nomeInstituicao:'UNIFACS',
    nome:'Administração',
    dataFim: '2018-12-20',
    dataInicio: '2018-06-10',
    infoAd:'Curso Tecninco de Administração'
  }]
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
              this.objUserPerfil = response.response;
              this.objUserPerfil.user = this.mapsService.objClienteBase.user;
              this.objUserPerfil.userDefault = this.mapsService.objClienteBase.user;
              this.objUserPerfil.email = this.mapsService.objClienteBase.email;
              this.objUserPerfil.emailDefault = this.mapsService.objClienteBase.email;
              this.objUserPerfil.idioma =  this.objUserPerfil.idioma ? this.objUserPerfil.idioma : 'pt-br'
              console.log(this.mapsService.objClienteBase)
              //@ts-ignore
            }
          }
        )
        .catch(
          error =>{
          }
        )
      }, 300);
    }
  
    onsubmit(){
      console.log(this.formularioSenha.value);
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
  }
  
