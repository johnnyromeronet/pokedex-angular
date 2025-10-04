import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padzero'
})
export class PadZeroPipe implements PipeTransform {

  transform(value: number, length: number = 4): string {
    return value.toString().padStart(length, '0');
  }
}