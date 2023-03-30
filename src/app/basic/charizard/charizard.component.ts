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
  idPokemon: number = 6;
  constructor(
    private pokemonService: PokemonService, // inyeccion del servicio
  ) { }

  ngOnInit(): void {

    // implementar el servicio dentro de OnInit
    this.pokemonService.getPokemonService(this.idPokemon).subscribe({
      next: (pokemon) => {
        this.charizard = pokemon // asignar la respuesta del servicio a la variable declarada
      },
      error: (error: HttpErrorResponse) => {
      }
    });
  }

}
