import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Team } from './pages/team/team';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'projects', component: Projects },
  { path: 'team', component: Team },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
