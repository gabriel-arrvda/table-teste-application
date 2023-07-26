import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './lib/app/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
