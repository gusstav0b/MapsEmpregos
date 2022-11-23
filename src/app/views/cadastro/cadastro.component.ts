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

  onsubmit(){
    let obj = JSON.parse("{}");
    obj = this.formulario.value;
    let token = Math.random().toString(36).substring(2,12);
    let token2 = Math.random().toString(36).substring(2,12);
    let tokenUser = token + token2;
    obj.token = tokenUser;

    this.mapsService.cadastraUsuario(obj).subscribe((result: any) => {
      if(result.mensagem=="CRIADO CLIENTE"){
        this.snackBar.open("Usuário criado com sucesso!", "Fechar", {duration: 3000});
        localStorage.setItem('token', tokenUser);
        this.router.navigate(['/pages/home']);
        //this.formulario.reset();
      }else{
        this.snackBar.open("Erro ao cadastrar usuário.", "Fechar", {duration: 3000});
      }  
    }); 
  }
}
