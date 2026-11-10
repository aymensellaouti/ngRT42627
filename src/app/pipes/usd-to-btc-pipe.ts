import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../config/const.config';

@Pipe({
  name: 'usdToBtc',
})
export class UsdToBtcPipe implements PipeTransform {
  transform(amount: number, isBtcToUsd = true): number {
    return isBtcToUsd ? amount * APP_CONST.btcUsd : amount / APP_CONST.btcUsd;
  }
}
