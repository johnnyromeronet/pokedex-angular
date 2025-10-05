import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'metric'
})
export class MetricPipe implements PipeTransform {
    transform(value: number | string, decimals: number = 1): string {
        if (value == null) return '';
        const meters = Number(value) / 10;
        return meters.toFixed(decimals);
    }
}
