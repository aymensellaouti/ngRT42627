import { Component, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-second',
  styles: ``,
  template: `<h2>Hello {{name()}}</h2>`,
})
export class Second {
  acr = inject(ActivatedRoute);
  name = input('');
  router = inject(Router);
  blackListEffect = effect(() => {
    if (this.name() == 'aymen')
       this.router.navigate(['']);
  })
  constructor() {

    //V1
    // console.log(this.acr.snapshot);
    // if (this.acr.snapshot.params['name'] == 'aymen') {
    //   this.router.navigate(['']);
    // }
    // this.name.set(this.acr.snapshot.params['name'])
  }
}
