import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './basic/counter/counter.component';

const routes: Routes = [
  {
    path: 'basic/counter',
    component: CounterComponent
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
