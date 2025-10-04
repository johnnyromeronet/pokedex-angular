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
}
