import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <h2 class="text-special"> template displaying the text as user types </h2>
  <input [(ngModel)]="name" type = "text">
  {{name}}
  `,
  styles: [`
  .text-special{
  color: red; }
  `]
})
export class Component1Component implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit() {
  }

}
