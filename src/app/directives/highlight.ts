import { Directive, input, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.backgroundColor]': 'this.color()',
    '(mouseenter)': 'this.onMouseEnter()',
    '(mouseleave)': 'this.onMouseLeave()',
  },
})
export class Highlight implements OnInit{
  in = input('yellow');
  out = input('red');
  color = signal(this.out());
  ngOnInit(): void {
    this.color = signal(this.out());
  }
  onMouseEnter() {
    this.color.set(this.in());
  }
  onMouseLeave() {
    this.color.set(this.out());
  }
  constructor() {
    console.log('highlight');
  }
}
