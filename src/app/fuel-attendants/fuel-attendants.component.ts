import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { environment } from '../../environments/environment';

import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-fuel-attendants',
  templateUrl: './fuel-attendants.component.html',
  styleUrls: ['./fuel-attendants.component.scss']
})
export class FuelAttendantsComponent implements OnInit {

  data;
  source: LocalDataSource;
  users = {}; //for logged in user

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
      attendantId: {
        title: "ID",
        filter: false,
        editable: false,
      },
      email: {
        title: "Email",
        filter: false
      },
      password: {
        title: "Password",
        filter: false
      },
      station: {
        title: "Station",
        filter: false
      },
    }
  };

  constructor(private http: HttpClient, private authService: NbAuthService) { 
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.users = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
          //console.log(this.users[0]);
        }

      });
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
    this.http.post(environment.apiUrl.concat("/fuel-attendants.php"), this.users[0]).subscribe(user => (this.data = user));
  }

  onAddCall(event){
    event.confirm.resolve(event.newData);
            event.newData.source = "add";
            event.newData.company =  this.users[0].id; 
            console.log(event.newData); //this contains the new edited data
        //post request
    const req = this.http.post(environment.apiUrl.concat('/fuel-attendants.php'), event.newData);
     // 0 requests made - .subscribe() not called.
    req.subscribe();
   // 1 request made.
  }
  onEditCall(event){
    event.confirm.resolve(event.newData);
            event.newData.source = "edit";
            event.newData.company =  this.users[0].id; 
            console.log(event.newData); //this contains the new edited data
        //post request
    const req = this.http.post(environment.apiUrl.concat('/fuel-attendants.php'), event.newData);
     // 0 requests made - .subscribe() not called.
    req.subscribe();
   // 1 request made.
  }
  onDeleteCall(event){
    event.confirm.resolve(event.data);
            event.data.source = "delete"; 
            console.log(event.data); //this contains the new edited data
        //post request
    const req = this.http.post(environment.apiUrl.concat('/fuel-attendants.php'), event.data);
     // 0 requests made - .subscribe() not called.
    req.subscribe();
   // 1 request made.
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'attendantId',
        search: query
      },
      {
        field: 'email',
        search: query
      },
      {
        field: 'password',
        search: query
      },
      {
        field: 'station',
        search: query
      },
    ], false); 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

}
