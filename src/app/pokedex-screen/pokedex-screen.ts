import { Component, inject } from '@angular/core';
import { PokemonResultResponse } from '@data/pokemon-response.model';
import { PokedexService } from '@services/pokedex.service';

@Component({
  selector: 'app-pokedex-screen',
  templateUrl: './pokedex-screen.html',
  styleUrl: './pokedex-screen.css',
  imports: []
})
export class PokedexScreen {

  private readonly _pokedexService = inject(PokedexService);

  data = this._pokedexService.data;

  selectPokemon(pokemon: PokemonResultResponse) {
    this._pokedexService.selected = pokemon;
  }
}
