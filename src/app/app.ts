import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './components/first/first';
import { Second } from './components/second/second';
import { Som } from './signals/som/som';
import { Pere } from './componentCommuunication/pere/pere';
import { NgstyleExemple } from './directives/ngstyle-exemple/ngstyle-exemple';
import { NgclassExemple } from './directives/ngclass-exemple/ngclass-exemple';
import { CurrencyPipe, DatePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { UsdToBtcPipe } from './pipes/usd-to-btc-pipe';

@Component({
  imports: [
    RouterOutlet,
    First,
    Second,
    Som,
    Pere,
    NgstyleExemple,
    NgclassExemple,
    DatePipe,
    UpperCasePipe,
    SlicePipe,
    UsdToBtcPipe,
    CurrencyPipe,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  date = new Date();
  protected readonly title = signal('rt42627');
}
