import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '**', loadChildren: './remunerations/remunerations.module#RemunerationsModule' }
];
