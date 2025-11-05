import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { RicetteComponent } from './ricette/ricette.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chi-siamo', component: ChiSiamoComponent },
  { path: 'ricette', component: RicetteComponent }
];
