import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { PokedexScreen } from '../pokedex-screen/pokedex-screen';
import { PokedexControl } from '../pokedex-control/pokedex-control';
import { PokedexEvolution } from '../pokedex-evolution/pokedex-evolution';
import { PokedexDetail } from '../pokedex-detail/pokedex-detail';
import { PokedexWeakness } from '../pokedex-weakness/pokedex-weakness';
import { Pokemon } from '@data/pokemon.model';
import { isPlatformBrowser } from '@angular/common';

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

  constructor(
    @Inject(PLATFORM_ID) private readonly _platformId: Object
  ) {
    debugger;
    if (isPlatformBrowser(this._platformId)) {
      // Busca un elemento
      const found = this.data.find(p => p.id === 2);
      console.log(found);

      // Filtra elementos
      const filtered = this.data.filter(p => p.name.includes('saur'));
      console.log(filtered);

      // Transforma elementos
      const names = this.data.map(p => p.name.toUpperCase());
      console.log(names);

      // Ordena elementos
      const ordered = this.data.sort((a, b) => a.name.localeCompare(b.name));
      console.log(ordered);

      localStorage.setItem('pokemons', JSON.stringify(this.data));
      const saved = localStorage.getItem('pokemons');
      if (saved) {
        const data = JSON.parse(saved);
      }
    }
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}
