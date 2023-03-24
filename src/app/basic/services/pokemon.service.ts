import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://pokeapi.co/api/v2/pokemon/'; // url principal para el servicio

  constructor(
    private http: HttpClient,// declarar la injeccion de la dependencia http para el servicio
  ) { }


  /**
   * @description Servicio para consultar pokemon por id
   * @param id parametro
   * @returns
   */
  getPokemonService(id: number): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.url+id}`);
  }
}
