import { Component, signal } from '@angular/core';
import { getPokemon, Pokemon } from './pokemon-api';
import { PokemonCard } from './pokemon-card';

@Component({
  selector: 'app-lookup',
  imports: [PokemonCard],
  template: `
    <h1>Lookup</h1>
    <form (submit)="$event.preventDefault(); lookup(query.value)">
      <label for="pokemon-query">Pok&eacute;mon name or Pok&eacute;dex number</label>
      <input id="pokemon-query" #query type="search" placeholder="e.g. pikachu or 25" required />
      <button type="submit" [disabled]="loading()">Search</button>
    </form>

    <p role="status">{{ loading() ? 'Searching...' : pokemon() ? 'Result found.' : '' }}</p>
    <p role="alert">{{ error() }}</p>

    @if (pokemon(); as result) {
      <app-pokemon-card [pokemon]="result" />
    }
  `,
})
export class Lookup {
  readonly pokemon = signal<Pokemon | null>(null);
  readonly loading = signal(false);
  readonly error = signal('');

  async lookup(value: string) {
    if (this.loading()) return;

    const query = value.trim().toLowerCase().replace(/\s+/g, '-');
    this.pokemon.set(null);
    this.error.set('');

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(query)) {
      this.error.set('Enter a name or number, such as pikachu or 25.');
      return;
    }

    this.loading.set(true);
    try {
      const pokemon = await getPokemon(query);
      this.pokemon.set(pokemon);
      if (!pokemon) this.error.set('No matching result. Check the name or number and try again.');
    } catch {
      this.error.set('Could not reach the Pok\u00e9mon API. Try again in a moment.');
    } finally {
      this.loading.set(false);
    }
  }
}
