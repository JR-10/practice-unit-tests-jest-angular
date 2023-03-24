import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.scss']
})
export class CharizardComponent implements OnInit {

  charizard: Pokemon | undefined; // declarar variable chertizard

  constructor(
    private pokemonService: PokemonService, // inyeccion del servicio
  ) { }

  ngOnInit(): void {

    // implementar el servicio dentro de OnInit
    this.pokemonService.getPokemonService(6).subscribe({
      next: (pokemon) => {
        console.log('valor de Pokemon: ', pokemon);
        this.charizard = pokemon // asignar la respuesta del servicio a la variable declarada
      },
      error: (error: HttpErrorResponse) => {
        console.log('valor de error: ', error);
      }
    });
  }

}
