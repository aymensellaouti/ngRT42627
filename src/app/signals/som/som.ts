import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-som',
  styleUrl: './som.css',
  templateUrl: './som.html',
})
export class Som {
  x = signal(5);
  y = signal(7);
  z = computed(() => this.x() + this.y());
  zz = computed(() => {
    console.log('in zz');
    return this.z() * 2
  })
}
