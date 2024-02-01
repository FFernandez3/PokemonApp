import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon-list/Pokemon';

const URL='https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor(private http: HttpClient) { }

  /*lista todos los recursos */
  public getAll(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(URL);

  }
  /*obtiene un recurso por su id */
  public getById(){

  }
}
