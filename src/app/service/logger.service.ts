import { Service } from "@angular/core";

@Service()
export class LoggerService {
  logs: unknown[] = [];
  constructor() {
    console.log('Logger Service is Ready');
  }
  log(message: unknown) {
    this.logs.push(message);
    console.log({ message });
  }
}
