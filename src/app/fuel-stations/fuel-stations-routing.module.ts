import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelStationsComponent } from './fuel-stations.component';

const routes: Routes = [{ path: '', component: FuelStationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelStationsRoutingModule { }
