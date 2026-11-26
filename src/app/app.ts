import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  styles: `
    nav { display: flex; gap: 1rem; }
    .active { font-weight: bold; }
  `,
  template: `
    <header>
      <p>Pok&eacute;mon Type Finder</p>
      <nav aria-label="Main navigation">
        <a routerLink="/lookup" routerLinkActive="active" ariaCurrentWhenActive="page">Lookup</a>
        <a routerLink="/compare" routerLinkActive="active" ariaCurrentWhenActive="page">Compare</a>
      </nav>
    </header>
    <main>
      <router-outlet />
    </main>
  `,
})
export class App {}
