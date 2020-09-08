import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelCompaniesComponent } from './fuel-companies.component';

const routes: Routes = [{ path: '', component: FuelCompaniesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelCompaniesRoutingModule { }
