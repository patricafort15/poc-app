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
import { MainComponent } from './main/main.component';
import { CbmsDashboardComponent } from './cbms/cbms-dashboard/cbms-dashboard.component';
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
import { CodesComponent } from './lem/eventAdmin/codes/codes.component';
import { LemDashboardComponent } from './lem/eventAdmin/lem-dashboard/lem-dashboard.component';
import { EventsComponent } from './lem/eventAdmin/events/events.component';
import { SurveysComponent } from './lem/eventAdmin/surveys/surveys.component';
import { UsersComponent } from './lem/eventAdmin/users/users.component';
import { VoterMgmtDashboardComponent } from './vms/voter-mgmt-dashboard/voter-mgmt-dashboard.component';
import { VoterListComponent } from './vms/voter-list/voter-list.component';
import { SortDirective } from './sort.directive';
import { VoterReportComponent } from './vms/voter-report/voter-report.component';
import { MktgCampaignComponent } from './vms/mktg-campaign/mktg-campaign.component';
import { VendorDashboardComponent } from './vms/vendor-dashboard/vendor-dashboard.component';
import { VendorTrackerComponent } from './vms/vendor-tracker/vendor-tracker.component';
import { DonationTrackerComponent } from './vms/donation-tracker/donation-tracker.component';
import { LetterSampleComponent } from './vms/letter-sample/letter-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AttendancePerDistComponent,
    AttendancePerLocalComponent,
    AttendanceHighestComponent,
    UserDashboardComponent,
    RegistrationComponent,
    UserProfileComponent,
    MainComponent,
    CbmsDashboardComponent,
    AnalyticsComponent,
    CitizenBenefitsHistoryComponent,
    CitizenDatabaseComponent,
    CitizenRegistrationComponent,
    FieldAgentViewComponent,
    HomepageComponent,
    HospBillAssistanceComponent,
    MedicineAssistanceComponent,
    MedicineInventoryComponent,
    PeoplesDayAssistanceComponent,
    LandingPageComponent,
    MainEventComponent,
    LemRegistrationComponent,
    CodesComponent,
    LemDashboardComponent,
    EventsComponent,
    SurveysComponent,
    UsersComponent,
    VoterMgmtDashboardComponent,
    VoterListComponent,
    SortDirective,
    VoterReportComponent,
    MktgCampaignComponent,
    VendorDashboardComponent,
    VendorTrackerComponent,
    DonationTrackerComponent,
    LetterSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
