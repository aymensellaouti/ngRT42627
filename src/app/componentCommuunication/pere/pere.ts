import { Component } from '@angular/core';
import { Fils } from '../fils/fils';
import { Highlight } from '../../directives/highlight';

@Component({
  imports: [Fils, Highlight],
  selector: 'app-pere',
  styleUrl: './pere.css',
  templateUrl: './pere.html',
})
export class Pere {
handleSonMessage(message: string) {
  alert(message)
}
}
