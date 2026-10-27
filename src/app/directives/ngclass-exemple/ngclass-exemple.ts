import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ngclass-exemple',
  styleUrl: './ngclass-exemple.css',
  templateUrl: './ngclass-exemple.html',
})
export class NgclassExemple {
  isOn = signal(false);
  interrupteur() {
    this.isOn.update(value => !value )
  }
}
