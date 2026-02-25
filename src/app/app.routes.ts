import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects').then(m => m.Projects) },
  { path: 'team', loadComponent: () => import('./pages/team/team').then(m => m.Team) },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
