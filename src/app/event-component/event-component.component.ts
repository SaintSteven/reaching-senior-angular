import { Component } from '@angular/core';

@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent {
  counter: number;

  constructor() {
    this.counter = 0;
  }

  counterPlus() {
    this.counter++;
  }
}
