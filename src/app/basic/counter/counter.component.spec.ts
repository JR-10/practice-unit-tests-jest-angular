import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {

  // declaracion de variables globales
  let component: CounterComponent; // componente a probar
  let fixture: ComponentFixture<CounterComponent>; // ayuda a detectar cambios

  // Metodo que se ejecuta antes de cualquier prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });


  // Metodo que se ejecuta despues del foreach anterior
  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
