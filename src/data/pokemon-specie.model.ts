export interface PokemonSpecie {
    evolution_chain: PokemonEvolutionChainDetail;
}

export interface PokemonEvolutionChainDetail {
    id: number;
    url: string;
}