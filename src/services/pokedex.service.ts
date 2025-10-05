import { DestroyRef, inject, Injectable, signal, WritableSignal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { PokeApiService } from "./poke-api.service";
import { PokemonResponse, PokemonResultResponse } from "@data/pokemon-response.model";
import { PokemonDetail, PokemonTypeDamageRelation, PokemonTypeDetail } from "@data/pokemon-detail.model";
import { PokemonSpecie } from "@data/pokemon-specie.model";
import { PokemonEvolution, PokemonEvolutionChain } from "@data/pokemon-evolution.model";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly _destroyRef = inject(DestroyRef);
  private readonly _pokeApiService = inject(PokeApiService);

  private readonly _data: WritableSignal<PokemonResponse | null> = signal(null);
  private readonly _selected: WritableSignal<PokemonResultResponse | null> = signal(null);
  private readonly _details: WritableSignal<PokemonDetail | null> = signal(null);
  private readonly _evolutions: WritableSignal<PokemonEvolution | null> = signal(null);
  private readonly _damage: WritableSignal<PokemonTypeDamageRelation | null> = signal(null);

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

  get details(): WritableSignal<PokemonDetail | null> {
    return this._details;
  }

  get evolutions(): WritableSignal<PokemonEvolution | null> {
    return this._evolutions;
  }

  get damage(): WritableSignal<PokemonTypeDamageRelation | null> {
    return this._damage;
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
            id: this.getIdFromUrl(x.url),
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

  getPokemonById(id: number) {
    this._pokeApiService
      .getPokemon(id)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((response: PokemonDetail) => {
        this._details.set(response);
      });
  }

  getEvolutionsById(id: number) {
    this._pokeApiService
      .getSpecie(id)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((response: PokemonSpecie) => {
        const pokemonId = this.getIdFromUrl(response.evolution_chain.url);
        this._pokeApiService
          .getEvolutionChain(pokemonId)
          .pipe(takeUntilDestroyed(this._destroyRef))
          .subscribe((response: PokemonEvolution) => {
            this.fillEvolutionIds(response.chain);
            this._evolutions.set(response);
          });
      });
  }

  getPokemonType(name: string) {
    this._pokeApiService
      .getType(name)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((response: PokemonTypeDetail) => {
        this._damage.set(response.damage_relations);
      });
  }

  private fillEvolutionIds(chain: PokemonEvolutionChain) {
    chain.species.id = this.getIdFromUrl(chain.species.url);
    if (chain.evolves_to && chain.evolves_to.length > 0) {
      chain.evolves_to.forEach(child => this.fillEvolutionIds(child));
    }
  }

  private getIdFromUrl(url: string): number {
    return Number(url.split('/').slice(-2, -1)[0]);
  }
}