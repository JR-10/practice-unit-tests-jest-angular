import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {

  // declaracion de variables globales
  let component: CounterComponent; // componente a probar
  let fixture: ComponentFixture<CounterComponent>; // ayuda a detectar cambios
  let compiled: HTMLElement; // permite hacer pruebas con snapshopt elemntos compilados

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
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // es la primera prueba que se crea por lo general
  test('debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  // probar el comportamiento de la funcion
  test('increaseBy debe aumentar basado en el argumento', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15)
  });

  test('hacer click en los botones, debe incrementar y decrementar en 1', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    buttons[0].click();
    expect(component.counter).toBe(12);
  });

  test('cambiar el counter debe de actualizar la etiqueta h1', () => {
    component.increaseBy(10);
    fixture.detectChanges(); // para forzar a tomar los cambios
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20');
  });

});
