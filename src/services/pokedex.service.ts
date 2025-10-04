import { DestroyRef, inject, Injectable, signal, WritableSignal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { PokeApiService } from "./poke-api.service";
import { PokemonResponse, PokemonResultResponse } from "@data/pokemon-response.model";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly _destroyRef = inject(DestroyRef);
  private readonly _pokeApiService = inject(PokeApiService);

  private readonly _data: WritableSignal<PokemonResponse | null> = signal(null);
  private readonly _selected: WritableSignal<PokemonResultResponse | null> = signal(null);

  private readonly _limit: number = 1025;

  get data(): WritableSignal<PokemonResponse | null> {
    return this._data;
  }

  get selected(): WritableSignal<PokemonResultResponse | null> {
    return this._selected;
  }

  set selected(value: PokemonResultResponse | null) {
    this._selected.set(value);
  }

  getPokemonList(limit: number, offset: number) {

    const data = this._data();
    if (!data || data.results.length < this._limit) {
      limit = limit + offset > this._limit ? (limit + offset) - this._limit : limit;

      this._pokeApiService
        .getPokemonList(limit, offset)
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe((response: PokemonResponse) => {

          const results = response.results.map(x => ({
            id: Number(x.url.split('/').slice(-2, -1)[0]),
            name: x.name,
            url: x.url
          }));

          response.results = results;
          if (data) {
            response.results.unshift(...data.results);
          }

          this._data.set(response);
        });
    }
  }
}