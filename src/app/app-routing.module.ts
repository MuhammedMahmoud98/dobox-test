import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'platform',
    pathMatch: 'full'
  },
  {
    path: 'Auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'platform',
    loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule)
  },
  // { path: 'kanban', loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule) },
  // { path: 'main-table', loadChildren: () => import('./main-table/main-table.module').then(m => m.MainTableModule) },
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
