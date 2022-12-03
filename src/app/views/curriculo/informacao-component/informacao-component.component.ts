import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informacao-component',
  templateUrl: './informacao-component.component.html',
  styleUrls: ['./informacao-component.component.css']
})
export class InformacaoComponentComponent implements OnInit {

  constructor() { }
  @Input() campo
  @Input() flagDisabled=false
  @Input() informacao
  ngOnInit(): void {
    console.log(this.informacao)
  }

}
