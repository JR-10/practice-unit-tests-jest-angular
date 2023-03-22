import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

// Para los modulos no es necesario realiar test

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }
