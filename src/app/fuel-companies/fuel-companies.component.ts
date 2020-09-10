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
    add: {
      confirmCreate: true,
         },
    columns: {
      companyName: {
        title: "Company"
      },
      companyEmail: {
        title: "Email"
      },
      companyPhone: {
        title: "Phone"
      },
    }
  };
  data;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get("http://localhost/ePassAPI/fuel-company.php").subscribe(user => (this.data = user));
  }

  onPostCall(event){
    event.confirm.resolve(event.newData);
            console.log(event.newData); //this contains the new edited data
        //post request
    const req = this.http.post('http://localhost/ePassAPI/add-fuel-company.php', event.newData);
     // 0 requests made - .subscribe() not called.
    req.subscribe();
   // 1 request made.
  }

}
