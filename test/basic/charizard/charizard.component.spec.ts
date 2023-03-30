import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharizardComponent } from '../../../src/app/basic/charizard/charizard.component';
import { PokemonService } from '../../../src/app/basic/services/pokemon.service';
import { request } from 'http';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement; // para hacer pruebas con html
  let service: PokemonService; // variable para el servicio
  let httpMock: HttpTestingController; // para inyectar informacion ficticia

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharizardComponent ],
      imports: [HttpClientTestingModule], // importar HttpClientTestingModule como modulo para las pruebas
      providers: [PokemonService] // importar el servicio para el test
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController)

    fixture.detectChanges();

    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer un match con el snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  test('debe de mostrar un loading al inicio', () => {  // prueba HTML
    const h2 = compiled.querySelector('h2'); // declara la constante
    expect (h2?.textContent ).toContain('Loading...'); // espera que dentro del h2 este el Loading...
  });

  test('debe de cargar a charizard inmediatamente', () => {  // prueba componente llamado al servicio

    // constante de la repsuesta del servicio
    const dummyPokemon = {
      name: 'charizardo!!!',
      sprites: {
        front_default: 'https://charizard.com/sprite.png',
      }
    }
    // constante para el endpoint del servicio
    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET'); // espera que el metodo utilizado en el request es un GET
    request.flush(dummyPokemon); // se inyecta la data, para simular que es request regreso el dummyPokemon

    fixture.detectChanges(); // dispara el ciclo de vida de Angular, regenera los componente
    // console.log(compiled.innerHTML); // validar con el console.log()

  });

});
