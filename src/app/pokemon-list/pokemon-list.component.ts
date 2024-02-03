import { Component, OnInit } from '@angular/core';
import { Pokemon } from './Pokemon';
import { PokemonDataService } from '../pokemon-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{
  /*mock temporal para prueba*/
  pokemons:Pokemon[]=[];
  maxPokemonsToShow = 10;

  constructor(private pokemonDataService: PokemonDataService, private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/?limit=' + this.maxPokemonsToShow)
    .subscribe(response => {
      const results = response.results;

      results.forEach((result: any, index: number) => {
        this.http.get<any>(result.url)
          .subscribe(pokemonDetails => {
            const pokemon: Pokemon = {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              height: pokemonDetails.height,
              weight: pokemonDetails.weight,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`,
              types: pokemonDetails.types.map((type: { name: any; }) => type.name),
              weaknesses: []
            };

            // Agrega el Pokémon a la lista
            this.pokemons.push(pokemon);
          });
      });
    });
      }
   
      
  
}
