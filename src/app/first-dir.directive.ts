import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appFirstDir]'
})
export class FirstDirDirective {

  @Input()
  appHighlight = '';

  @Input()
  color2 = '';

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = this.appHighlight;
  }


}
