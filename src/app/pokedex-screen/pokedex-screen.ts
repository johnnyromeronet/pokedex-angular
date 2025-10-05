import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PokemonResultResponse } from '@data/pokemon-response.model';
import { PokedexService } from '@services/pokedex.service';

@Component({
  selector: 'app-pokedex-screen',
  templateUrl: './pokedex-screen.html',
  styleUrl: './pokedex-screen.css',
  imports: [
    NgClass
  ]
})
export class PokedexScreen {

  private readonly _pokedexService = inject(PokedexService);

  data = this._pokedexService.data;
  selected = this._pokedexService.selected;

  selectPokemon(pokemon: PokemonResultResponse) {
    this._pokedexService.selected = pokemon;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

    if (atBottom) {
      const data = this._pokedexService.data();
      if (data && data.next) {
        const params = new URL(data.next).searchParams;
        const offset = Number(params.get('offset'));
        const limit = Number(params.get('limit'));
        this._pokedexService.getPokemonList(limit, offset);
      }
    }
  }
}
