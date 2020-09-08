import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule, NbUserModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbIconModule,
    NbSidebarModule.forRoot(), 
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    HttpClientModule,
    NbUserModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'token', // this parameter tells where to look for the token
          },
          baseEndpoint: 'http://localhost/ePassAPI',
          login: {
            endpoint: '/sign-in.php',
            method: 'post',
            redirect: {
              success: 'dashboard',
              failure: null, // stay on the same page
            },
          },
          register: {
            endpoint: '/sign-up',
            method: 'post',
          },
          logout: {
            endpoint: '/sign-out',
            method: 'post',
          },
          requestPass: {
            endpoint: '/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/reset-pass',
            method: 'post',
          },
        }),
      ],
      forms: {},
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
