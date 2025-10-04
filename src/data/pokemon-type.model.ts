import { PokemonTypeDetail } from "./pokemon-detail.model";

export interface PokemonType {
    id: number;
    damage_relations: DamageRelation
}

export interface DamageRelation {
    double_damage_from: PokemonTypeDetail[];
}