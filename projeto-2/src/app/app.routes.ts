import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { DetalhesComponent } from './paginas/detalhes/detalhes.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'detalhes/:id',
        component: DetalhesComponent,
        title: 'Detalhes do Animal'
    }
];
