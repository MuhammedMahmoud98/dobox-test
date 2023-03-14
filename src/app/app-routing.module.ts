import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginGuard } from './auth/guards/login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'platform',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    canLoad: [LoginGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'platform',
    canLoad: [AuthGuard],
    loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
