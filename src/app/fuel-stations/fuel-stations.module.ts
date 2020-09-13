import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FuelStationsRoutingModule } from './fuel-stations-routing.module';
import { FuelStationsComponent } from './fuel-stations.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from "@akveo/ng2-completer";
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [FuelStationsComponent],
  imports: [
    CommonModule,
    FuelStationsRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule,
    NbCardModule,
  ]
})
export class FuelStationsModule { }
