import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '**', loadChildren: './remuneration/remuneration.module#RemunerationModule' }
];
