import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../config/const.config';

@Pipe({
  name: 'usdToBtc',
})
export class UsdToBtcPipe implements PipeTransform {
  transform(amount: number): number {
    return amount * APP_CONST.btcUsd;
  }
}
