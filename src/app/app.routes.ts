import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { NgstyleExemple } from './directives/ngstyle-exemple/ngstyle-exemple';
import { Pere } from './componentCommuunication/pere/pere';
import { Second } from './components/second/second';

export const routes: Routes = [
  {path: '', component: First},
  {path: 'ngstyle', component: NgstyleExemple},
  {path: 'comm', component: Pere},
  {path: 'hello/:name', component: Second}
];
