import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelAttendantsRoutingModule } from './fuel-attendants-routing.module';
import { FuelAttendantsComponent } from './fuel-attendants.component';


@NgModule({
  declarations: [FuelAttendantsComponent],
  imports: [
    CommonModule,
    FuelAttendantsRoutingModule
  ]
})
export class FuelAttendantsModule { }
