import { RemunerationComponent } from './remuneration.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { remunerationRoutes } from './remuneration.route';

@NgModule({
  imports: [
    RouterModule.forChild(remunerationRoutes)
  ],
  declarations: [
    RemunerationComponent
  ],
  providers: []
})

export class RemunerationModule {}
