import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from '../../../src/app/basic/father/father.component';
import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement; // componente compilado

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherComponent, FatherSonComponent ], // llamar a componente Hijo

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
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

  test('debe de establecer el cliente con el nombre indicado', () => {
    component.onSetClient('Pedro') // setear el nombre del cliente
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2'); // buscar el elemento HTML
    // console.log(codeDiv?.textContent); // imprimir el contenido
    expect (codeDiv?.textContent).toContain('"Pedro"') // esta buscando
  });

  test('debe borrar el cliente si se emite onDeleteClient del hijo', () => {
    component.client = { id: 1, name: 'Juan'};
    fixture.detectChanges();

    // tomar el contro del componente Hijo
    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonCompoent: FatherSonComponent = sonDebugElement.componentInstance;
    // console.log( '###', sonCompoent.client);

    // asersiones
    sonCompoent.onDeleteClient.emit();
    expect(component.client).toBe(undefined);
  });


  test('debe actualiar el cliente onClientUpdate del hijo', () => {
    component.client = { id: 1, name: 'Juan'};
    fixture.detectChanges();

    // tomar el contro del componente Hijo
    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonCompoent: FatherSonComponent = sonDebugElement.componentInstance;
    // console.log( '###', sonCompoent.client);

    // asersiones
    sonCompoent.onClientUpdated.emit({id: 10, name: 'Pedro'});
    expect(component.client).toEqual({id: 10, name: 'Pedro'});
  });

});
