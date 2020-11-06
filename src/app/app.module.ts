import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AttendancePerDistComponent } from './pages/attendance-per-dist/attendance-per-dist.component';
import { AttendancePerLocalComponent } from './pages/attendance-per-local/attendance-per-local.component';
import { AttendanceHighestComponent } from './pages/attendance-highest/attendance-highest.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
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
