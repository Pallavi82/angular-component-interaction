import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styles: ['']
})
export class Component1Component implements OnInit {

  public name ="Pallavi";
  public message = "";

  constructor() { }

  ngOnInit() {
  }

  public onClick(value) {
    console.log(value);
  }

}
