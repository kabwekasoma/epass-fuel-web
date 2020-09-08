import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelStationsRoutingModule } from './fuel-stations-routing.module';
import { FuelStationsComponent } from './fuel-stations.component';


@NgModule({
  declarations: [FuelStationsComponent],
  imports: [
    CommonModule,
    FuelStationsRoutingModule
  ]
})
export class FuelStationsModule { }
