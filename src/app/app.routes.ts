import { Routes } from '@angular/router';

// Auth
import { LoginComponent } from './login/login.component';

// Layout
import { LayoutComponent } from './layout/layout.component';

// Dashboards
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnerComponent } from './owner/owner.component';

// Spaces
import { ManageSpacesComponent } from './manage-spaces/manage-spaces.component';
import { RegisterSpaceComponent } from './register-space/register-space.component';

// Bookings
import { CalendarViewComponent } from './bookings/calendar-view/calendar-view.component';
import { NewBookingComponent } from './bookings/new-booking/new-booking.component';
import { HistoryComponent } from './bookings/history/history.component';

// Reports
import { RevenueComponent } from './reports/revenue/revenue.component';
import { UtilizationComponent } from './reports/utilization/utilization.component';

// Alerts
import { VacancyComponent } from './alerts/vacancy/vacancy.component';

// Complaints
import { NewComplaintComponent } from './complaints/new-complaint/new-complaint.component';
import { HistoryComponent as ComplaintHistoryComponent } from './complaints/history/history.component';

export const routes: Routes = [
  // Public route
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // Protected routes under Layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Dashboards
      { path: 'dashboard', component: DashboardComponent },
      { path: 'owner', component: OwnerComponent },

      // Spaces
      { path: 'manage-spaces', component: ManageSpacesComponent },
      { path: 'register-space', component: RegisterSpaceComponent },

      // Bookings
      { path: 'bookings/calendar', component: CalendarViewComponent },
      { path: 'bookings/new', component: NewBookingComponent },
      { path: 'bookings/history', component: HistoryComponent },

      // Reports
      { path: 'reports/revenue', component: RevenueComponent },
      { path: 'reports/utilization', component: UtilizationComponent },

      // Alerts
      { path: 'alerts/vacancy', component: VacancyComponent },

      // Complaints
      { path: 'complaints/new', component: NewComplaintComponent },
      { path: 'complaints/history', component: ComplaintHistoryComponent },
    ]
  }

  // Optional: NotFound route
  // { path: '**', component: NotFoundComponent }
];
