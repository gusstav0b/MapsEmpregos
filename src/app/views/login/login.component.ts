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

  onsubmit(){
    //console.log(this.formulario.value);
    this.mapsService.consultarUsuario(this.formulario.value.user, this.formulario.value.password).subscribe((result: any) => {
      if(result.token != ""){
        //this.snackBar.open("Usuário criado com sucesso!", "Fechar", {duration: 3000});
        localStorage.setItem('token', result.token);
        this.router.navigate(['/pages/home']);
        //this.formulario.reset();
      }else{
        this.snackBar.open("Usuário ou senha incorretos", "Fechar", {duration: 3000});
      }  
    }); 

    //this.router.navigate(['/pages/home']);
  }
}
