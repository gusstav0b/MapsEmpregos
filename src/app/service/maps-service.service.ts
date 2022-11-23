import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapsServiceService {

  menuFlutuante = false;
  
  public vaga = {
    codigo: "12345555",
    titulo: "VAGA1",
    descricao: "DESCRIÇÃO DE TESTE PARA A VAGA1",
    empresa: "EMPRESA DE TESTE PARA VAGA1",
    cargo: "CARGO DE TESTE PARA VAGA1",
    area: "ÁREA DE TESTE PARA VAGA1",
    requisitos: "REQUISITOS DE TESTE PARA VAGA1",
    endereco: "ENDEREÇO DE TESTE PARA VAGA1",
    img: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_960_720.jpg"
  }

  constructor(private httpClient: HttpClient, private router : Router) { }

  cadastraUsuario(obj){
    return this.httpClient.post(environment.api + "/cliente/cadastro", obj)
  }

  consultarUsuario(emailUser, password){
    return this.httpClient.get(environment.api + "/cliente/consulta" + "/" + emailUser + "/" + password)
  }

  get logado(): boolean{
    return localStorage.getItem('token') ? true : false;
  }

  deslogar(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
