import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {MiniBarComponent} from "./components/mini-bar/mini-bar.component";
import {RemoveExtensionPipe} from "./pipes/remove-extension.pipe";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {PlatformsListComponent} from "./components/platforms-list/platforms-list.component";
import {FirstLetterPipe} from "./pipes/first-letter.pipe";
import { RemoveClassDirective } from './directives/remove-class.directive';
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RoundedMembersComponent } from './components/rounded-members/rounded-members.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    NavBarComponent,
    MiniBarComponent,
    RemoveExtensionPipe,
    SideBarComponent,
    PlatformsListComponent,
    FirstLetterPipe,
    RemoveClassDirective,
    RoundedMembersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLinkWithHref,
    RouterLinkActive,
    TranslateModule,
  ],
  exports: [
    NavBarComponent,
    MiniBarComponent,
    RemoveExtensionPipe,
    SideBarComponent,
    PlatformsListComponent,
    FirstLetterPipe,
    MaterialModule,
    RemoveClassDirective,
    FormsModule,
    ReactiveFormsModule,
    RoundedMembersComponent,
  ]
})
export class CoreModule { }
