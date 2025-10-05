import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { PokemonResultResponse } from '@data/pokemon-response.model';
import { TypeColorDirective } from '@directives/type-color.directive';
import { PadZeroPipe } from '@pipes/pad-zero.pipe';
import { PokedexService } from '@services/pokedex.service';

@Component({
  selector: 'app-pokedex-evolution',
  templateUrl: './pokedex-evolution.html',
  styleUrl: './pokedex-evolution.css',
  imports: [
    NgTemplateOutlet,
    PadZeroPipe,
    TypeColorDirective,
    NgClass
  ]
})
export class PokedexEvolution {

  private readonly _pokedexService = inject(PokedexService);

  details = this._pokedexService.details;
  selected = this._pokedexService.selected;
  evolutions = this._pokedexService.evolutions;

  constructor() {
    effect(() => {
      const selected = this._pokedexService.selected();
      if (selected) {
        this._pokedexService.getPokemonById(selected.id);
        this._pokedexService.getEvolutionsById(selected.id);
      }
    });
  }

  selectPokemon(pokemon: PokemonResultResponse) {
    this._pokedexService.selected = pokemon;
  }
}
