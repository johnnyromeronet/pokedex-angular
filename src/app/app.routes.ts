import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: '',
        component: App
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
