import { PokemonResultResponse } from "./pokemon-response.model";

export interface PokemonEvolution {
    id: number;
    chain: PokemonEvolutionChain;
}

export interface PokemonEvolutionChain {
    evolves_to: PokemonEvolutionChain[];
    species: PokemonResultResponse;
}