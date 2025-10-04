export interface PokemonResponse {
    count: number;
    next: string;
    previous: string;
    results: PokemonResultResponse[];
}

export interface PokemonResultResponse {
    id: number;
    name: string;
    url: string;
}