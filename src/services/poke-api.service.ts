import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { PokemonDetail, PokemonTypeDetail } from "@data/pokemon-detail.model";
import { PokemonEvolution } from "@data/pokemon-evolution.model";
import { PokemonResponse } from "@data/pokemon-response.model";
import { PokemonSpecie } from "@data/pokemon-specie.model";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

    private readonly _httpClient = inject(HttpClient);

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    getPokemonList(limit: number, offset: number) : Observable<PokemonResponse> {
        const url = `${environment.apiUrl}pokemon?limit=${limit}&offset=${offset}`;
        return this._httpClient.get<PokemonResponse>(url);
    }

    getPokemon(id: number) : Observable<PokemonDetail> {
        const url = `${environment.apiUrl}pokemon/${id}`;
        return this._httpClient.get<PokemonDetail>(url);
    }

    getEvolutionChain(id: number) : Observable<PokemonEvolution> {
        const url = `${environment.apiUrl}evolution-chain/${id}`;
        return this._httpClient.get<PokemonEvolution>(url);
    }    

    getType(name: string) : Observable<PokemonTypeDetail> {
        const url = `${environment.apiUrl}type/${name}`;
        return this._httpClient.get<PokemonTypeDetail>(url);
    }

    getSpecie(id: number) : Observable<PokemonSpecie> {
        const url = `${environment.apiUrl}pokemon-species/${id}`;
        return this._httpClient.get<PokemonSpecie>(url);
    }
}