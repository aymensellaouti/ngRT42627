import { inject, Service } from "@angular/core";
import { LoggerService } from "./logger.service";

@Service()
export class HelloService {

  logger = inject(LoggerService);
  hello() {
    this.logger.log('Hello RT4');
  }
}
