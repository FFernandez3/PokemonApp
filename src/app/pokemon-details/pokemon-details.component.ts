import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon-list/Pokemon';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokemonDataService } from '../pokemon-data.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
 
})
export class PokemonDetailsComponent  implements OnInit{
  pokemonId: number | null = null;
  pokemon: Pokemon | null = null;
  typeNames!: { slot: number; type: { name: string; url: string; }; }[];
  
  constructor(private pokemonDataService: PokemonDataService,private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log(idParam);
    this.pokemonId = idParam ? +idParam : null;
    console.log("pokemonId "+this.pokemonId)

    if (this.pokemonId !== null) {
      this.pokemonDataService.getById(this.pokemonId)
        .subscribe((pokemonCaracteristics: Pokemon) => {
          this.pokemon = {
            id: pokemonCaracteristics.id,
            name: pokemonCaracteristics.name,
            height: pokemonCaracteristics.height,
            weight: pokemonCaracteristics.weight,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonCaracteristics.id}.png`,
            // Otros detalles del Pokémon...
            weaknesses: pokemonCaracteristics.weaknesses,
            types:pokemonCaracteristics.types,
          };
         console.log("tipos"+JSON.stringify(this.pokemon.types))
         console.log(typeof this.pokemon.types);
          
        });
    }
  }

}
