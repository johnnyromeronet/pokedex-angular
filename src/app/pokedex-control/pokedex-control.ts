import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pokemon } from '@data/pokemon.model';
import { PadZeroPipe } from '@pipes/pad-zero.pipe';

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

  @Input({ required: true }) data!: Pokemon;
}
