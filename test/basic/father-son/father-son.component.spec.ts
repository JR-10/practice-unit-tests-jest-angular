import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement; // para unit test con HTML

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });


  test('no deben de aparecer botones si no hay cliente', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });

  test('deben de aparecer 2 botones si hay cliente', () => {
    component.client = {id: 1, name: 'Juan'};
    fixture.detectChanges();
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  test('Si hay cliente, hacer match con el snapshot ', () => {
    component.client = {id: 1, name: 'Pedro'};
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  });

  test('debe de emitir onDeleteClient con el boton de eliminar', () => {
    component.client = {id: 1, name: 'Pedro'};
    fixture.detectChanges();
    // espiar en el componente
    jest.spyOn(component.onDeleteClient, 'emit'); // funcion especial de jest para espiar
    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    btnDelete?.dispatchEvent(new Event('click')); // simular un eventop click
    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  test('debe de emitir onClientUpdated con el boton Cambiar ID', () => {
    component.client = {id: 1, name: 'Pedro'};
    fixture.detectChanges();
    // espiar en el componente
    jest.spyOn(component.onClientUpdated, 'emit'); // funcion especial de jest para espiar
    const btnChangeId = compiled.querySelector('[data-test=btn-id]');
    btnChangeId?.dispatchEvent(new Event('click')); // simular un eventop click
    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({id: 5, name: 'Pedro'});
  });

  test('deben de emitir onChangeClient con el  ID especificado SI hay un cliente', () => {
    jest.spyOn(component.onClientUpdated, 'emit');
    component.onChangeId(10);
    expect(component.onClientUpdated.emit).not.toHaveBeenCalled();

    component.client = {id: 1, name: 'Pedro'};
    fixture.detectChanges();
    component.onChangeId(10);
    expect(component.onClientUpdated.emit).not.toHaveBeenCalledWith({id: 5, name: 'Pedro'});

  });

});
