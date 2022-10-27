import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<app-header></app-header>
            <router-outlet></router-outlet>
        <app-footer></app-footer>
  `,
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
