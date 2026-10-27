import { Component, signal } from '@angular/core';
import { Second } from '../second/second';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Second, FormsModule],
  selector: 'app-first',
  styleUrl: './first.css',
  templateUrl: './first.html',
})
export class First {
  section = signal("RT4");
  isHidden = signal(false);
  message = signal('hello');
  constructor() {
    setTimeout(() => {
      this.message.set('reset');
      console.log('cc')
    }, 1500)
  }
  showHide() {
    this.isHidden.set(!this.isHidden());
  }
  changeMessage(newMessage: string){
    this.message.set(newMessage);
    this.message.set(newMessage);
  }
}
