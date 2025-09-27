import { Component } from '@angular/core';
import { PokedexScreen } from '../pokedex-screen/pokedex-screen';
import { PokedexControl } from '../pokedex-control/pokedex-control';
import { PokedexEvolution } from '../pokedex-evolution/pokedex-evolution';
import { PokedexDetail } from '../pokedex-detail/pokedex-detail';
import { PokedexWeakness } from '../pokedex-weakness/pokedex-weakness';

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

  data: any[] = [
    {
      id: 1,
      name: 'Bulbasaur'
    },
    {
      id: 2,
      name: 'Ivysaur'
    },
    {
      id: 3,
      name: 'Venusaur'
    }
  ];

  selectPokemon(pokemon: any) {
    alert(`Has seleccionado a ${pokemon.name} `);
  }
}
