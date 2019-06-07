import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <h2 class="text-special"> User text into the console </h2>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)"> Log In </button>
  `,
  styles:  [`
  .text-special {
    color: red;
  }`]
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
    console.log(value);
  }
}
