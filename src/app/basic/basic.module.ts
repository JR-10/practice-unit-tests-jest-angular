import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CharizardComponent } from './charizard/charizard.component';
import { FatherComponent } from './father/father.component';
import { FatherSonComponent } from './father-son/father-son.component';
import { CounteerRuoteComponent } from './counteer-ruote/counteer-ruote.component';

// Para los modulos no es necesario realiar test

@NgModule({
  declarations: [
    CounterComponent,
    CharizardComponent,
    FatherComponent,
    FatherSonComponent,
    CounteerRuoteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }
