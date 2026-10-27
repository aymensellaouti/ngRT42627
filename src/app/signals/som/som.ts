import { Component, computed, effect, signal } from '@angular/core';
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
  names = signal<string[]>(['youssef', 'Lina']);
  namesLength = computed(() => this.names().length)
  zz = computed(() => {
    console.log('in zz');
    return this.z() * 2
  })
  addName() {
    this.names.update((actualNames)=>[...actualNames, 'Mariem'])
  }
  // hugeNumberEffect = effect(() => {
  //   if (this.zz() > 100) {
  //     alert('Tu as dépassé 100')
  //   }
  // })
}
