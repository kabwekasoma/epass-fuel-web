import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FuelCompaniesRoutingModule } from './fuel-companies-routing.module';
import { FuelCompaniesComponent } from './fuel-companies.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from "@akveo/ng2-completer";
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [FuelCompaniesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FuelCompaniesRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
  ]
})
export class FuelCompaniesModule { }
