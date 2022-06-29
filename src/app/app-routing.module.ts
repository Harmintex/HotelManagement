import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationGuard } from './authentification.guard';

const routes: Routes = [
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then((m) => m.AuthentificationModule),
  },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthentificationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
