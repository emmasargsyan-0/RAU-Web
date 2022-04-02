import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {FormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import {MatListModule, MatTableModule} from '@angular/material';
import { TableComponent } from './table/table.component';
import { FirstpipePipe } from './firstpipe.pipe';
import {MyserviceService} from './myservice.service';
import { FirstDirDirective } from './first-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ListComponent,
    TableComponent,
    FirstpipePipe,
    FirstDirDirective
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatTableModule,
    FormsModule  // we need this for [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
