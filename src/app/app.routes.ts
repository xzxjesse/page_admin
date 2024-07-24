import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DadosVideosComponent } from './dados-videos/dados-videos.component';
import { DadosCategoriasComponent } from './dados-categorias/dados-categorias.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'dados-videos', component: DadosVideosComponent },
    { path: 'dados-categorias', component: DadosCategoriasComponent },

];
