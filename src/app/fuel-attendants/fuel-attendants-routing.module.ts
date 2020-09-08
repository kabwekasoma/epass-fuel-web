import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelAttendantsComponent } from './fuel-attendants.component';

const routes: Routes = [{ path: '', component: FuelAttendantsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelAttendantsRoutingModule { }
