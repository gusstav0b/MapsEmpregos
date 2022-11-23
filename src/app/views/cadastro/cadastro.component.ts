import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { MapsServiceService } from 'src/app/service/maps-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  constructor(private formBuilder : FormBuilder,
     private mapsService: MapsServiceService, 
     private snackBar: MatSnackBar,
     private router: Router,
     ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  async onsubmit(){
    await this.mapsService.cadastraUsuario(this.formulario.value).toPromise()
    .then(
      response =>{
        //@ts-ignore
        if(!response.mensagem.includes("já cadastrado")){
          //@ts-ignore
          this.snackBar.open(response.mensagem, "Fechar", {duration: 3000});

          let objLogin = JSON.parse("{}");
          objLogin.emailUser =  this.formulario.value.email;
          objLogin.password = this.formulario.value.password;

          this.mapsService.login(objLogin).toPromise()
          .then(
            response =>{
              //@ts-ignore
              if(!response.mensagem.includes("Falha na autenticação")){
                //@ts-ignore
                localStorage.setItem('token', response.token);
                this.router.navigate(['/pages/home']);
              }
            }
          )
          .catch(
            error =>{
              //this.snackBar.open(error.error.mensagem, "Fechar", {duration: 3000});
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
}
