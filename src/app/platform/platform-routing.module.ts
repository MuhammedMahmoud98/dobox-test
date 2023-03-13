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
          { path: 'kanban', loadChildren: () => import('../kanban/kanban.module').then(m => m.KanbanModule) },
          { path: 'main-table', loadChildren: () => import('../main-table/main-table.module').then(m => m.MainTableModule) },
          { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) }
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
