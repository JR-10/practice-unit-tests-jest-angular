import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './basic/counter/counter.component';
import { CharizardComponent } from './basic/charizard/charizard.component';
import { FatherComponent } from './basic/father/father.component';
import { FatherSonComponent } from './basic/father-son/father-son.component';
import { CounteerRuoteComponent } from './basic/counteer-ruote/counteer-ruote.component';

const routes: Routes = [
  {
    path: 'basic/counter',
    component: CounterComponent
  },
  {
    path: 'basic/counter-route/:initial',
    component: CounteerRuoteComponent
  },
  {
    path: 'basic/charizard',
    component: CharizardComponent
  },
  {
    path: 'basic/father',
    component: FatherComponent
  },
  {
    path: 'basic/son',
    component: FatherSonComponent
  },
  { // redireccion por si no encuentra alguna ruta
    path: '**',
    redirectTo: 'basic/counter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
