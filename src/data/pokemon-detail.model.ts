export interface PokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    sprites: PokemonSprite[];
    stats: PokemonStat[];
    abilities: PokemonAbility[];
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

export interface PokemonStat {
    name: string;
    base: number;
}

export interface PokemonAbility {
    ability: PokemonAbilityDetail;
}

export interface PokemonAbilityDetail {
    name: string;
    url: string;
}