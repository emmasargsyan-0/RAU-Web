import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{

   name = 'Name variable';
   propertyValue = 'Property Value';
   twoWayStr = 'twoWayStr';

   constructor() {
     alert('constructor');
   }

   @Input("newStr1")
   newStr = '';

  @Input()
  newStr1 = '';

   getName(): string {
     return name + ' from function';
   }

  callPhone(value: any): void {
    alert('callPhone function call with value '+ value);
  }

  clickFunction(): void {
    alert('clickFunction function call');
  }

  ngOnInit() {
    alert('ngOnInit');
  }

}
