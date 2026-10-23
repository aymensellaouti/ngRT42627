import { Component } from '@angular/core';
import { Second } from '../second/second';

@Component({
  imports: [Second],
  selector: 'app-first',
  styleUrl: './first.css',
  templateUrl: './first.html',
})
export class First {}
