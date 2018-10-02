import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '**', loadChildren: './individual-remuneration/individual-remuneration.module#IndividualRemunerationModule' }
];
