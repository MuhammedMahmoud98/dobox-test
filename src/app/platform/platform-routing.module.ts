import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform.component';
import {PlatformDetailsComponent} from "./components/platform-details/platform-details.component";
import * as path from "path";
import {PlatformUnitComponent} from "./components/platform-unit/platform-unit.component";
import {KanbanComponent} from "../kanban/kanban.component";
import {MainTableComponent} from "../main-table/main-table.component";
import {DashboardComponent} from "../dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent,
    children: [
      {
        path: ':id',
        component: PlatformDetailsComponent,
        children: [
          {
            path: 'kanban',
            component: KanbanComponent,
          },
          {
            path: 'main-table',
            component: MainTableComponent,
          },
          {
            path: 'dashboard',
            component: DashboardComponent,
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
