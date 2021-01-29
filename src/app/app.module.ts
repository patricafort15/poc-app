import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './kma/dashboard/dashboard.component';
import { AttendancePerDistComponent } from './kma/attendance-per-dist/attendance-per-dist.component';
import { AttendancePerLocalComponent } from './kma/attendance-per-local/attendance-per-local.component';
import { AttendanceHighestComponent } from './kma/attendance-highest/attendance-highest.component';
import { UserDashboardComponent } from './kma/user-dashboard/user-dashboard.component';
import { RegistrationComponent } from './kma/registration/registration.component';
import { UserProfileComponent } from './kma/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AttendancePerDistComponent,
    AttendancePerLocalComponent,
    AttendanceHighestComponent,
    UserDashboardComponent,
    RegistrationComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
