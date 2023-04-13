import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counteer-ruote',
  templateUrl: './counteer-ruote.component.html',
  styles: [
  ]
})
export class CounteerRuoteComponent implements OnInit {

  // declaracion de variables
  public counter: number = 0;

  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const initialValue: any = this.activateRoute.snapshot.paramMap.get('initial');
    this.counter = isNaN(initialValue) ? 10: initialValue; // isNaN -> si no es un numero
  }


  increaseBy(value: number): void {
    this.counter += value;
    //TODO:
    // console.log({newValue: this.counter});
  }
}
