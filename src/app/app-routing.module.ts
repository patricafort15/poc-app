import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceHighestComponent } from './pages/attendance-highest/attendance-highest.component';
import { AttendancePerDistComponent } from './pages/attendance-per-dist/attendance-per-dist.component';
import { AttendancePerLocalComponent } from './pages/attendance-per-local/attendance-per-local.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'attendance-per-dist', component: AttendancePerDistComponent },
  { path: 'attendance-per-local', component: AttendancePerLocalComponent },
  { path: 'attendance-highest', component: AttendanceHighestComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-profile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
