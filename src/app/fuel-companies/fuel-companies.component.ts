import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-fuel-companies',
  templateUrl: './fuel-companies.component.html',
  styleUrls: ['./fuel-companies.component.scss']
})
export class FuelCompaniesComponent implements OnInit {

  data;
  source: LocalDataSource;

  settings = {
    add: {
      confirmCreate: true,
         },
    edit: {
      confirmSave: true,
        },
    delete: {
      confirmDelete: true,
        },
    columns: {
      companyId: {
        title: "ID",
        filter: false,
        editable: false
      },
      companyName: {
        title: "Company",
        filter: false
      },
      companyEmail: {
        title: "Email",
        filter: false
      },
      companyPhone: {
        title: "Phone",
        filter: false
      },
    }
  };

  constructor(private http: HttpClient) { 
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
    // Simple GET request with response type <any> 
    this.http.get("http://localhost/ePassAPI/v1/fuel-companies.php").subscribe(user => (this.data = user));
    //this.http.get("http://test.epassapi.dczambia.com/v1/fuel-companies.php").subscribe(user => (this.data = user));
  }

  onAddCall(event){
    event.confirm.resolve(event.newData);
            event.newData.source = "add"; 
            console.log(event.newData); //this contains the new edited data
        //post request
    const req = this.http.post('http://localhost/ePassAPI/v1/fuel-companies.php', event.newData);
    //const req = this.http.post('http://test.epassapi.dczambia.com/v1/fuel-companies.php', event.newData);
     // 0 requests made - .subscribe() not called.
    req.subscribe();
   // 1 request made.
  }
  onEditCall(event){
    event.confirm.resolve(event.newData);
            event.newData.source = "edit"; 
            console.log(event.newData); //this contains the new edited data
        //post request
    const req = this.http.post('http://localhost/ePassAPI/v1/fuel-companies.php', event.newData);
    //const req = this.http.post('http://test.epassapi.dczambia.com/v1/fuel-companies.php', event.newData);
     // 0 requests made - .subscribe() not called.
    req.subscribe();
   // 1 request made.
  }
  onDeleteCall(event){
    event.confirm.resolve(event.data);
            event.data.source = "delete"; 
            console.log(event.data); //this contains the new edited data
        //post request
    const req = this.http.post('http://localhost/ePassAPI/v1/fuel-companies.php', event.data);
    //const req = this.http.post('http://test.epassapi.dczambia.com/v1/fuel-companies.php', event.data);
     // 0 requests made - .subscribe() not called.
    req.subscribe();
   // 1 request made.
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'companyName',
        search: query
      },
      {
        field: 'companyEmail',
        search: query
      },
      {
        field: 'companyPhone',
        search: query
      },
    ], false); 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

}
