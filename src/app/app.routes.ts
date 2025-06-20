import { Routes } from '@angular/router';

// Auth
import { LoginComponent } from './login/login.component';

// Layout
import { LayoutComponent } from './layout/layout.component';

// Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';

// Spaces
import { ManageSpacesComponent } from './manage-spaces/manage-spaces.component';

// Owner
import { OwnerComponent } from './owner/owner.component';

export const routes: Routes = [
  // Public
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // Protected (with layout)
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manage-spaces', component: ManageSpacesComponent },
      { path: 'owner', component: OwnerComponent },
    ]
  }

  // Optional: Wildcard 404 route
  // { path: '**', component: NotFoundComponent }
];
