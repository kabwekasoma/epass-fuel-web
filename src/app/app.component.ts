import { Component } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ePass';

  user = {}; //for logged in user
  userLevel = "";

  itemsBookNowAdmin: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/dashboard',
      home: true
    },
    {
      title: 'Administration',
      icon: 'people-outline',
      link: '/administration',
      children: [
        {
          title: 'Fuel Companies',
          icon: 'chevron-right-outline',
          link: '/fuel-companies',
        },
      ],
    },
    {
      title: 'Sign out',
      icon: 'log-out-outline',
      link: '/logout',
    },
  ];

  itemsFuelCompanyAdmin: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/dashboard',
      home: true
    },
    {
      title: 'Administration',
      icon: 'people-outline',
      link: '/administration',
      children: [
        {
          title: 'Fuel Stations',
          icon: 'chevron-right-outline',
          link: '/fuel-stations',
        },
        {
          title: 'Fuel Attendants',
          icon: 'chevron-right-outline',
          link: '/fuel-attendants',
        },
      ],
    },
    {
      title: 'Sign out',
      icon: 'log-out-outline',
      link: '/logout',
    },
  ];

  constructor(private readonly sidebarService: NbSidebarService, private authService: NbAuthService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
          //console.log(this.user[0].email);

          //User Specific Menu
          if(this.user[0].level == '2'){
            this.userLevel = "booknow-admin";
          }
          if(this.user[0].level == '4'){
            this.userLevel = "fuel-company-admin";
          }
        }

      });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
  
}
