import { Component, inject } from '@angular/core';
import { Fils } from '../fils/fils';
import { Highlight } from '../../directives/highlight';
import { LoggerService } from '../../service/logger.service';

@Component({
  imports: [Fils, Highlight],
  selector: 'app-pere',
  styleUrl: './pere.css',
  templateUrl: './pere.html',
  providers: [LoggerService]
})
export class Pere {
logger = inject(LoggerService);
constructor() {
  this.logger.log('Je suis le pere component')
}
handleSonMessage(message: string) {
  alert(message)
}
}
