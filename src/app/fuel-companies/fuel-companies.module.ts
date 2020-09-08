import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelCompaniesRoutingModule } from './fuel-companies-routing.module';
import { FuelCompaniesComponent } from './fuel-companies.component';


@NgModule({
  declarations: [FuelCompaniesComponent],
  imports: [
    CommonModule,
    FuelCompaniesRoutingModule
  ]
})
export class FuelCompaniesModule { }
