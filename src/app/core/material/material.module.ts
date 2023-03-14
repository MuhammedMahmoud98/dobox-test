import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // JUST FOR TEST
    MatCheckboxModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }
