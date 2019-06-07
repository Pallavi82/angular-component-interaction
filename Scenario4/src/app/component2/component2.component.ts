import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
  <h2> {{"Hello " + parentData}} </h2>
  <button (click)="firstEvent()"> Send event </button>
  `,
  styles: ['']
})
export class Component2Component implements OnInit {

  @Input() public parentData;
@Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  firstEvent(){
    this.childEvent.emit('Hey Pallavi');
  }

}
