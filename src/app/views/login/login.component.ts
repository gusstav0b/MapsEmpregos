import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  constructor(private formBuilder : FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  onsubmit(){
    console.log(this.formulario.value)
    this.router.navigate(['/pages/home']);
  }
}
