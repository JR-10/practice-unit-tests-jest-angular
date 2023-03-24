import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CharizardComponent } from './charizard/charizard.component';

// Para los modulos no es necesario realiar test

@NgModule({
  declarations: [
    CounterComponent,
    CharizardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }
