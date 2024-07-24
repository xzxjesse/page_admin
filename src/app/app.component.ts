import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { DadosVideosComponent } from './dados-videos/dados-videos.component';
import { DadosCategoriasComponent } from './dados-categorias/dados-categorias.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    DadosVideosComponent,
    DadosCategoriasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'page';
}

