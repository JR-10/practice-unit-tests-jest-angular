import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonService } from '../../../src/app/basic/services/pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ // agregar los imports
        HttpClientModule // agregar el HttpClientModule para las peticiones http
      ]
    });
    service = TestBed.inject(PokemonService); // injeccion del servicio PokemonService
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('debe de traer informacion de bulbasaur', (done) => { // (done) => no termina la prueba hasta que llamemos el done o pasen 10 segundos
    service.getPokemonService(1).subscribe( pokemon => {
        // console.log('VALUE POKEMON', pokemon.name);
        expect(pokemon.name).toBe('bulbasaur');
        done(); // llama al done para terminar la prueba
      });
  });
});
