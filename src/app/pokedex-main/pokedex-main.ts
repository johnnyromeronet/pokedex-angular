import { Component, inject } from '@angular/core';
import { PokedexScreen } from '../pokedex-screen/pokedex-screen';
import { PokedexControl } from '../pokedex-control/pokedex-control';
import { PokedexEvolution } from '../pokedex-evolution/pokedex-evolution';
import { PokedexDetail } from '../pokedex-detail/pokedex-detail';
import { PokedexWeakness } from '../pokedex-weakness/pokedex-weakness';
import { PokedexService } from '@services/pokedex.service';

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

  private readonly _pokedexService = inject(PokedexService);

  data = this._pokedexService.data;

  constructor() {
    this._pokedexService.getPokemonList(50, 0);
  }
}
