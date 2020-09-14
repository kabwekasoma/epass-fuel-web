import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FuelAttendantsRoutingModule } from './fuel-attendants-routing.module';
import { FuelAttendantsComponent } from './fuel-attendants.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from "@akveo/ng2-completer";
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [FuelAttendantsComponent],
  imports: [
    CommonModule,
    FuelAttendantsRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule,
    NbCardModule,
  ]
})
export class FuelAttendantsModule { }
