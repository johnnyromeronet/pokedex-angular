import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MetricPipe } from '@pipes/metric.pipe';
import { PokedexService } from '@services/pokedex.service';

@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.html',
  styleUrl: './pokedex-detail.css',
  imports: [
    NgTemplateOutlet,
  ],
  providers: [
    MetricPipe
  ]
})
export class PokedexDetail {

  private readonly _pokedexService = inject(PokedexService);
  private readonly _metricPipe = inject(MetricPipe);

  details = this._pokedexService.details;

  getMetricValue(value: number) {
    return this._metricPipe.transform(value);
  }
}
