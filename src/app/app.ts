import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './components/first/first';
import { Second } from './components/second/second';
import { Som } from './signals/som/som';
import { Pere } from './componentCommuunication/pere/pere';
import { NgstyleExemple } from './directives/ngstyle-exemple/ngstyle-exemple';
import { NgclassExemple } from './directives/ngclass-exemple/ngclass-exemple';
import { CurrencyPipe, DatePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { UsdToBtcPipe } from './pipes/usd-to-btc-pipe';
import { LoggerService } from './service/logger.service';
import { HelloService } from './service/hello.service';
import { Navbar } from './component/navbar/navbar';

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
    RouterOutlet,
    Navbar
],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  date = new Date();
  loggerService = inject(LoggerService);
  //helloService = inject(HelloService);
  protected readonly title = signal('rt42627');
  constructor(
    private helloService: HelloService
  ) {
    this.helloService.hello();
    this.loggerService.log('application déclenché');
  }
}
