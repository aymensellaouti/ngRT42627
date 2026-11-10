import { Component, inject, input, output, signal } from '@angular/core';
import { LoggerService } from '../../service/logger.service';

@Component({
  imports: [],
  selector: 'app-fils',
  styleUrl: './fils.css',
  templateUrl: './fils.html',
})
export class Fils {
  loggerService = inject(LoggerService);
  constructor() {
    this.loggerService.log('Je suis le fils Component')
  }
  messageDePapa = input.required({
    // eli bech i3ayet lel input hadha lazem i3ayetlou message
    alias: 'message',
    transform: (valeurDeLInput) => "BABA 9ali : "+valeurDeLInput
  })

  sendMessageToPapa = output<string>();

  onSendMessageToPapa() {
    this.sendMessageToPapa.emit("Ok ama nkhali el ba9i 3andi");
  }
}

// double(x  = 5) {
//   ecrire(x*2)
// }

// double() => 10
// double(7) => 14
