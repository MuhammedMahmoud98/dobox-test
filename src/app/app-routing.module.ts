import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Auth',
    outlet: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'Auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    outlet: 'auth'
  },
  {
    path: 'platform',
    loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
