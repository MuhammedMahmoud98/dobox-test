import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import {CoreModule} from "../core/core.module";
import { PlatformDetailsComponent } from './components/platform-details/platform-details.component';
import { PlatformUnitComponent } from './components/platform-unit/platform-unit.component';
import { PlatformControllerComponent } from './components/platform-controller/platform-controller.component';
import { SubPlatformsComponent } from './components/sub-platforms/sub-platforms.component';
import { MembersAndTasksComponent } from './components/members-and-tasks/members-and-tasks.component';


@NgModule({
  declarations: [
    PlatformComponent,
    PlatformDetailsComponent,
    PlatformUnitComponent,
    PlatformControllerComponent,
    SubPlatformsComponent,
    MembersAndTasksComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    CoreModule
  ]
})
export class PlatformModule { }
