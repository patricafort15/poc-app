import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceHighestComponent } from './kma/attendance-highest/attendance-highest.component';
import { AttendancePerDistComponent } from './kma/attendance-per-dist/attendance-per-dist.component';
import { AttendancePerLocalComponent } from './kma/attendance-per-local/attendance-per-local.component';
import { DashboardComponent } from './kma/dashboard/dashboard.component';
import { RegistrationComponent } from './kma/registration/registration.component';
import { UserDashboardComponent } from './kma/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './kma/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo:'kma/dashboard', pathMatch: 'full' },
  { path: 'kma/dashboard', component: DashboardComponent },
  { path: 'kma/attendance-per-dist', component: AttendancePerDistComponent },
  { path: 'kma/attendance-per-local', component: AttendancePerLocalComponent },
  { path: 'kma/attendance-highest', component: AttendanceHighestComponent },
  { path: 'kma/user-dashboard', component: UserDashboardComponent },
  { path: 'kma/registration', component: RegistrationComponent },
  { path: 'kma/user-profile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
