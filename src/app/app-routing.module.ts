import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth-guard.service';
//Authentication Imports
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'administration', canActivate: [AuthGuard], loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) },
  { path: 'fuel-companies', canActivate: [AuthGuard], loadChildren: () => import('./fuel-companies/fuel-companies.module').then(m => m.FuelCompaniesModule) },
  { path: 'fuel-stations', canActivate: [AuthGuard], loadChildren: () => import('./fuel-stations/fuel-stations.module').then(m => m.FuelStationsModule) },
  { path: 'fuel-attendants', canActivate: [AuthGuard], loadChildren: () => import('./fuel-attendants/fuel-attendants.module').then(m => m.FuelAttendantsModule) },
  {path: '**', redirectTo: 'dashboard'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
