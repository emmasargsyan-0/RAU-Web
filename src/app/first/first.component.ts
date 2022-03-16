import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

   name = 'Name variable';
   propertyValue = 'Property Value';
   twoWayStr = 'twoWayStr';

   getName(): string {
     return name + ' from function';
   }

  callPhone(value: any): void {
    alert('callPhone function call with value '+ value);
  }

  clickFunction(): void {
    alert('clickFunction function call');
  }

}
