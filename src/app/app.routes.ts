import { Routes } from '@angular/router';
import { Compare } from './compare';
import { Lookup } from './lookup';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lookup' },
  { path: 'lookup', component: Lookup, title: 'Lookup | Pok\u00e9mon Type Finder' },
  { path: 'compare', component: Compare, title: 'Compare | Pok\u00e9mon Type Finder' },
  { path: '**', redirectTo: 'lookup' },
];
