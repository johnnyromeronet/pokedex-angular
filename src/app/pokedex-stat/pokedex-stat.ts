import { NgTemplateOutlet } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { PokedexService } from "@services/pokedex.service";

@Component({
    selector: 'app-pokedex-stat',
    templateUrl: './pokedex-stat.html',
    styleUrl: './pokedex-stat.css',
    imports: [
        NgTemplateOutlet
    ]
})
export class PokedexStat {

    private readonly _pokedexService = inject(PokedexService);

    details = this._pokedexService.details;
    default: any[] = Array.from({ length: 6 }, (_, i) => ({ empty: 10, index: i, name: 'stat ' + (i + 1) }));
    stats = computed(() => {
        let stats: any[] = [];
        const details = this._pokedexService.details();
        if (details) {
            details.stats.forEach((stat) => {
                const valueAux = stat.base_stat > 100 ? 100 : stat.base_stat;
                stats.push({
                    name: stat.stat.name,
                    value: valueAux,
                    rows: Math.floor(valueAux / 10),
                    extra: (valueAux % 10) * 10,
                    empty: 10 - Math.ceil(valueAux / 10),
                    over: stat.base_stat > 100
                });
            });
        }
        return stats;
    });

    getArray(n: number): number[] {
        return Array.from({ length: n });
    }
}