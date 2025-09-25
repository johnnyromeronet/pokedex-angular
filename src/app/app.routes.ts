import { Routes } from '@angular/router';
import { About } from './about/about';
import { PokedexMain } from './pokedex-main/pokedex-main';

export const routes: Routes = [
    {
        path: '',
        component: PokedexMain
    },
    {
        path: 'about',
        component: About
    },
    {
        path: '**',
        redirectTo: ''
    }
];
