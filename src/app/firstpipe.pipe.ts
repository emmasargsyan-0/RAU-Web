import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstpipe',
  pure: false
})
export class FirstpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Math.pow(value, args[0]);
  }

}
