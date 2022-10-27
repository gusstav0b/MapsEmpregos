import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  onsubmit(){
    console.log(this.formulario.value)
  }
}
