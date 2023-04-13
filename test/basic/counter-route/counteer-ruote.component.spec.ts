import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounteerRuoteComponent } from '../../../src/app/basic/counteer-ruote/counteer-ruote.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

const mockActivateRoute = {
  snapshot: {
    paramMap: {
      get(param:string){
        return (param ===  'initial') ? '100' : undefined;
      }
    }
  }
}

describe('CounteerRuoteComponent', () => {
  let component: CounteerRuoteComponent;
  let fixture: ComponentFixture<CounteerRuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounteerRuoteComponent ],
      imports:[RouterTestingModule], // RouterTestingModule para pruebas con Router
      providers:[{provide: ActivatedRoute, useValue: mockActivateRoute}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounteerRuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de tener el valor inicial de 100 en la ruta /counter/100', () =>{
    expect(component.counter).toBe('100');
  });

  // test('debe de tener el valor inicial de 10 en la ruta /counter/20abcd', () =>{
  //   expect(component.counter).toBe('10');
  // });
});
