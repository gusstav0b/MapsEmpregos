import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MapsServiceService } from 'src/app/service/maps-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  constructor(private formBuilder : FormBuilder, private router: Router, private mapsService: MapsServiceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  async onsubmit(){
    //console.log(this.formulario.value);
    let obj = JSON.parse("{}");
    obj.emailUser = this.formulario.value.user;
    obj.password = this.formulario.value.password;

    await this.mapsService.login(obj).toPromise()
    .then(
      response =>{
        //@ts-ignore
        if(!response.mensagem.includes("Falha na autenticação")){
          //console.log(response);
          //@ts-ignore
          this.snackBar.open(response.mensagem, "Fechar", {duration: 3000});
          //@ts-ignore
          localStorage.setItem('token', response.token);
          this.router.navigate(['/pages/home']);
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
