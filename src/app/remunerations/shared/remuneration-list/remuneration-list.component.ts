import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RemunerationSelectionStatus } from '../data.model';

@Component({
  selector: 'app-remuneration-list',
  templateUrl: './remuneration-list.component.html',
  styleUrls: ['./remuneration-list.component.scss']
})
export class RemunerationListComponent {

  @Input() title: string;
  @Input() label: string;
  @Input() remunerationSelectionStatusList: RemunerationSelectionStatus[];
  @Output() valueChange: EventEmitter<RemunerationSelectionStatus[]> = new EventEmitter();

  constructor() {}

  public onValueChanged($event: RemunerationSelectionStatus, index: number): void {
    this.remunerationSelectionStatusList[index] = $event;
    this.valueChange.emit(this.remunerationSelectionStatusList);
  }

}
