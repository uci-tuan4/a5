import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Pokemon } from './pokemon-api';

@Component({
  selector: 'app-pokemon-card',
  imports: [TitleCasePipe],
  template: `
    @let entry = pokemon();
    <article>
      <h2>#{{ entry.id }} {{ entry.name | titlecase }}</h2>
      @if (entry.sprites.front_default; as sprite) {
        <img [src]="sprite" alt="" width="96" height="96" />
      }

      <h3>Types</h3>
      <ul>
        @for (item of entry.types; track item.slot) {
          <li>{{ item.type.name | titlecase }}</li>
        }
      </ul>

      <h3>Base stats</h3>
      <dl>
        @for (item of entry.stats; track item.stat.name) {
          <dt>{{ item.stat.name === 'hp' ? 'HP' : (item.stat.name.replace('-', ' ') | titlecase) }}</dt>
          <dd>{{ item.base_stat }}</dd>
        }
      </dl>
    </article>
  `,
})
export class PokemonCard {
  readonly pokemon = input.required<Pokemon>();
}
