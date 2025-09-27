import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokedex-screen',
  imports: [],
  templateUrl: './pokedex-screen.html',
  styleUrl: './pokedex-screen.css'
})
export class PokedexScreen {

  // Decoradores clásicos de Angular
  @Input() data: any[] = [];
  @Output() notification = new EventEmitter<any>();

  // Sistema moderno basado en Signals, orientado a reactividad
  // data = input<any[]>([]); // devuelve una signal
  // notification = output<any>();

  selectPokemon(pokemon: any) {
    this.notification.emit(pokemon);
  }
}
