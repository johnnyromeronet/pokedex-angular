import { UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PadZeroPipe } from '@pipes/pad-zero.pipe';
import { PokedexService } from '@services/pokedex.service';

@Component({
  selector: 'app-pokedex-control',
  templateUrl: './pokedex-control.html',
  styleUrl: './pokedex-control.css',
  imports: [
    UpperCasePipe,
    PadZeroPipe
  ]
})
export class PokedexControl {

  private readonly _pokedexService = inject(PokedexService);

  selected = this._pokedexService.selected;

  catchPokemon(catched: boolean) {
    const selected = this._pokedexService.selected();
    if (selected) {
      selected.catched = catched;
      this._pokedexService.selected = selected;
    }
  }

  move(movement: number) {
    let index = 0;
    const selected = this._pokedexService.selected();
    const data = this._pokedexService.data();
    if (selected && data) {
      index = data.results.findIndex(obj => obj.id === selected.id);
      index += movement;
      if (index < 0) {
        index = 0;
      } else if (index > data.count - 1) {
        index = data.count - 1;
      } else if (index > data.results.length - 1) {
        if (data.next) {
          const params = new URL(data.next).searchParams;
          const offset = Number(params.get('offset'));
          const limit = Number(params.get('limit'));
          this._pokedexService.getPokemonList(limit, offset);
        }
        index = data!.results.length - 1;
      }
    }

    const pokemon = data!.results[index];
    this._pokedexService.selected = pokemon;
  }
}
