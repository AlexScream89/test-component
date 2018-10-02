import { IndividualRemunerationComponent } from './individual-remuneration.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { remunerationRoutes } from './individual-remuneration.route';
import { ToggleButtonComponent } from './shared/toggle-button/toggle-button.component';
import { RemunerationComponent } from './shared/remuneration/remuneration.component';
import { RemunerationListComponent } from './shared/remuneration-list/remuneration-list.component';
import { RemunerationsService } from './shared/providers/remunerations.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(remunerationRoutes),
    MatButtonModule
  ],
  declarations: [
    IndividualRemunerationComponent,
    ToggleButtonComponent,
    RemunerationComponent,
    RemunerationListComponent
  ],
  providers: [RemunerationsService]
})

export class IndividualRemunerationModule {}
