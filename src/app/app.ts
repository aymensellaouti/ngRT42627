import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './components/first/first';
import { Second } from './components/second/second';
import { Som } from './signals/som/som';
import { Pere } from './componentCommuunication/pere/pere';
import { NgstyleExemple } from './directives/ngstyle-exemple/ngstyle-exemple';
import { NgclassExemple } from './directives/ngclass-exemple/ngclass-exemple';

@Component({
  imports: [RouterOutlet, First, Second, Som, Pere, NgstyleExemple, NgclassExemple],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('rt42627');
}
