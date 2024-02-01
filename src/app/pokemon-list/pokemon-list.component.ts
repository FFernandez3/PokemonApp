import { Component, OnInit } from '@angular/core';
import { Pokemon } from './Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{
  /*mock temporal para prueba*/
  pokemons :  Pokemon[]=[
    {
    image:"aca iria la img",
    name:"bulbasur",
    id:1,
    height:7,
    weight:69
   },
   {
    image:"aca iria la img",
    name:"Ivysaur",
    id:1,
    height:7,
    weight:69
   },
   {
    image:"aca iria la img",
    name:"Venusaur",
    id:1,
    height:7,
    weight:69
   }
  
]
  constructor(){
  }

  ngOnInit(): void {
  }
}
