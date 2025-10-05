import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[typeColor]'
})
export class TypeColorDirective implements OnChanges {
    @Input('typeColor') typeName!: string;

    // Colores de fondo por tipo
    private typeColors: Record<string, string> = {
        normal: '#A4ACAF',
        fighting: '#C03028',
        flying: '#A890F0',
        poison: '#A040A0',
        ground: '#E0C068',
        rock: '#B8A038',
        bug: '#A8B820',
        ghost: '#705898',
        steel: '#B8B8D0',
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        psychic: '#F85888',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC',
        stellar: '#D3D3D3',
        unknown: '#68A090'
    };

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['typeName'] && this.typeName) {
            const bgColor = this.typeColors[this.typeName] || '#777';

            // Determinar color de texto según contraste simple
            const textColor = this.isDarkColor(bgColor) ? 'white' : 'black';

            this.renderer.setStyle(this.el.nativeElement, 'background-color', bgColor);
            this.renderer.setStyle(this.el.nativeElement, 'color', textColor);
        }
    }

    private isDarkColor(hex: string): boolean {
        // Convertir hex a RGB
        const c = hex.substring(1); // quitar #
        const r = parseInt(c.substring(0, 2), 16);
        const g = parseInt(c.substring(2, 4), 16);
        const b = parseInt(c.substring(4, 6), 16);
        // Luminosidad relativa
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        return lum < 128;
    }
}
