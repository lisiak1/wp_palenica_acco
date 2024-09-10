import { Routes } from '@angular/router';
import { AccomodationComponent } from './components/accomodation/accomodation.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ubytovanie',
    pathMatch: 'full',
  },
  {
    path: 'ubytovanie/domov',
    redirectTo: 'ubytovanie',
    pathMatch: 'full',
  },
  {
    path: 'ubytovanie',
    component: AccomodationComponent,
  },
];
