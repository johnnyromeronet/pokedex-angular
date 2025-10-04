export interface PokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    sprites: PokemonSprite[];
    stats: PokemonStat[];
}

export interface PokemonType {
    slot: number;
    type: PokemonTypeDetail;
}

export interface PokemonTypeDetail {
    name: string;
    url: string;
}

export interface PokemonSprite {
    front_default: string;
}

export interface PokemonStat {
    base_stat: number;
    stat: PokemonStatDetail;
}

export interface PokemonStatDetail {
    name: string;
    url: string;
}