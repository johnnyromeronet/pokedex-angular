import { Component } from '@angular/core';
import { PokedexScreen } from '../pokedex-screen/pokedex-screen';
import { PokedexControl } from '../pokedex-control/pokedex-control';
import { PokedexEvolution } from '../pokedex-evolution/pokedex-evolution';
import { PokedexDetail } from '../pokedex-detail/pokedex-detail';
import { PokedexWeakness } from '../pokedex-weakness/pokedex-weakness';
import { Pokemon } from '@data/pokemon.model';

@Component({
  selector: 'app-pokedex-main',
  templateUrl: './pokedex-main.html',
  styleUrl: './pokedex-main.css',
  imports: [
    PokedexScreen,
    PokedexControl,
    PokedexEvolution,
    PokedexDetail,
    PokedexWeakness
  ]
})
export class PokedexMain {

  data: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      height: 1,
      weight: 1,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      types: [],
      stats: [],
      weaknesses: []
    },
    {
      id: 2,
      name: 'Ivysaur',
      height: 1,
      weight: 1,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
      types: [],
      stats: [],
      weaknesses: []
    },
    {
      id: 3,
      name: 'Venusaur',
      height: 1,
      weight: 1,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
      types: [],
      stats: [],
      weaknesses: []
    }
  ];

  selectedPokemon: Pokemon = this.data[0];

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}
