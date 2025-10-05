import { NgTemplateOutlet } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { PokedexService } from '@services/pokedex.service';

@Component({
  selector: 'app-pokedex-damage',
  templateUrl: './pokedex-damage.html',
  styleUrl: './pokedex-damage.css',
  imports: [
    NgTemplateOutlet
  ]
})
export class PokedexDamage {

  private readonly _pokedexService = inject(PokedexService);

  damage = this._pokedexService.damage;

  constructor() {
    effect(() => {
      const details = this._pokedexService.details();
      if (details) {
        this._pokedexService.getPokemonType(details.types[0].type.name);
      }
    });
  }
}
