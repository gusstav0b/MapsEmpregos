import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<div style="min-height: 100%; position: relative;">
    <app-header></app-header>
            <router-outlet></router-outlet>
        <app-footer></app-footer></div>
  `,
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
