import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  // declaracion de variables
  public counter: number = 10;

  constructor() { }

  ngOnInit(): void {
  }


  increaseBy(value: number): void {
    this.counter += value;
    //TODO:
    // console.log({newValue: this.counter});
  }

}
