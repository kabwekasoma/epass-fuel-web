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

  constructor(private readonly sidebarService: NbSidebarService, private authService: NbAuthService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
          //console.log(this.user[0].email);
        }

      });
  }

  items: NbMenuItem[] = [
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
    }
  ];

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
}
