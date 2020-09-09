import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-fuel-companies',
  templateUrl: './fuel-companies.component.html',
  styleUrls: ['./fuel-companies.component.scss']
})
export class FuelCompaniesComponent implements OnInit {

  settings = {
    columns: {
      companyName: {
        title: "Company Name"
      },
    }
  };
  data;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get("http://localhost/ePassAPI/fuel-company.php").subscribe(user => (this.data = user));
  }

}
