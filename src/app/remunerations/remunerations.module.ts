import { RemunerationsComponent } from './remunerations.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { remunerationRoutes } from './remunerations.route';
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
    RemunerationsComponent,
    ToggleButtonComponent,
    RemunerationComponent,
    RemunerationListComponent
  ],
  providers: [RemunerationsService]
})

export class RemunerationsModule {}
