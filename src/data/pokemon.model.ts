export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprite: string;
    types: string[];
    weaknesses: string[];
    stats: PokemonStat[];
}

export interface PokemonStat {
    name: string;
    base: number;
}