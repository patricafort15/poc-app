import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceHighestComponent } from './kma/attendance-highest/attendance-highest.component';
import { AttendancePerDistComponent } from './kma/attendance-per-dist/attendance-per-dist.component';
import { AttendancePerLocalComponent } from './kma/attendance-per-local/attendance-per-local.component';
import { DashboardComponent } from './kma/dashboard/dashboard.component';
import { RegistrationComponent } from './kma/registration/registration.component';
import { UserDashboardComponent } from './kma/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './kma/user-profile/user-profile.component';
import { CbmsDashboardComponent } from './cbms/cbms-dashboard/cbms-dashboard.component';
import { MainComponent } from './main/main.component';
import { AnalyticsComponent } from './cbms/analytics/analytics.component';
import { CitizenBenefitsHistoryComponent } from './cbms/citizen-benefits-history/citizen-benefits-history.component';
import { CitizenDatabaseComponent } from './cbms/citizen-database/citizen-database.component';
import { CitizenRegistrationComponent } from './cbms/citizen-registration/citizen-registration.component';
import { FieldAgentViewComponent } from './cbms/field-agent-view/field-agent-view.component';
import { HomepageComponent } from './cbms/homepage/homepage.component';
import { HospBillAssistanceComponent } from './cbms/hosp-bill-assistance/hosp-bill-assistance.component';
import { MedicineAssistanceComponent } from './cbms/medicine-assistance/medicine-assistance.component';
import { MedicineInventoryComponent } from './cbms/medicine-inventory/medicine-inventory.component';
import { PeoplesDayAssistanceComponent } from './cbms/peoples-day-assistance/peoples-day-assistance.component';
import { LandingPageComponent } from './lem/event/landing-page/landing-page.component';
import { MainEventComponent } from './lem/event/main-event/main-event.component';
import { LemRegistrationComponent } from './lem/event/lem-registration/lem-registration.component';
import { LemDashboardComponent } from './lem/eventAdmin/lem-dashboard/lem-dashboard.component';
import { CodesComponent } from './lem/eventAdmin/codes/codes.component'; 
import { EventsComponent } from './lem/eventAdmin/events/events.component';
import { SurveysComponent } from './lem/eventAdmin/surveys/surveys.component';
import { UsersComponent } from './lem/eventAdmin/users/users.component';

const routes: Routes = [
  { path: '', redirectTo:'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent},

  //KMA
  { path: 'kma/dashboard', component: DashboardComponent },
  { path: 'kma/attendance-per-dist', component: AttendancePerDistComponent },
  { path: 'kma/attendance-per-local', component: AttendancePerLocalComponent },
  { path: 'kma/attendance-highest', component: AttendanceHighestComponent },
  { path: 'kma/user-dashboard', component: UserDashboardComponent },
  { path: 'kma/registration', component: RegistrationComponent },
  { path: 'kma/user-profile', component: UserProfileComponent },

  //CBMS
  { path: 'cbms/cbms-dashboard', component: CbmsDashboardComponent},
  { path: 'cbms/analytics', component: AnalyticsComponent},
  { path: 'cbms/citizen-benefits-history', component: CitizenBenefitsHistoryComponent},
  { path: 'cbms/citizen-database', component: CitizenDatabaseComponent},
  { path: 'cbms/citizen-registration', component: CitizenRegistrationComponent},
  { path: 'cbms/field-agent-view', component: FieldAgentViewComponent},
  { path: 'cbms/homepage', component: HomepageComponent},
  { path: 'cbms/hosp-bill-assistance', component: HospBillAssistanceComponent},
  { path: 'cbms/medicine-assistance', component: MedicineAssistanceComponent},
  { path: 'cbms/medicine-inventory', component: MedicineInventoryComponent},
  { path: 'cbms/peoples-day-assistance', component: PeoplesDayAssistanceComponent},

  //LEM
  { path: 'lem/event/landing-page', component: LandingPageComponent},
  { path: 'lem/event/lem-registration', component: LemRegistrationComponent},
  { path: 'lem/event/main-event', component: MainEventComponent},
  { path: 'lem/eventAdmin/lem-dashboard', component: LemDashboardComponent},
  { path: 'lem/eventAdmin/codes', component: CodesComponent},
  { path: 'lem/eventAdmin/events', component: EventsComponent},
  { path: 'lem/eventAdmin/surveys', component: SurveysComponent},
  { path: 'lem/eventAdmin/users', component: UsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
