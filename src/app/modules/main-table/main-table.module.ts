import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTableRoutingModule } from './main-table-routing.module';
import { MainTableComponent } from './main-table.component';


@NgModule({
  declarations: [
    MainTableComponent
  ],
  imports: [
    CommonModule,
    MainTableRoutingModule
  ]
})
export class MainTableModule { }
