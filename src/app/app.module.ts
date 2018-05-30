import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { SummaryComponent } from './summary/summary.component';
import { TrendComponent } from './trend/trend.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    SummaryComponent,
    TrendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
