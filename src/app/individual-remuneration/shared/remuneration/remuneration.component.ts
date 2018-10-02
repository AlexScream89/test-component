import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RemunerationSelectionStatus } from '../data.model';

@Component({
  selector: 'app-remuneration',
  templateUrl: './remuneration.component.html',
  styleUrls: ['./remuneration.component.scss']
})
export class RemunerationComponent {

  @Input() remunerationSelectionStatus: RemunerationSelectionStatus;
  @Output() valueChange: EventEmitter<RemunerationSelectionStatus> = new EventEmitter();

  constructor() {}

  public isDisabled(): boolean {
    return (this.remunerationSelectionStatus.selected === false);
  }

  public onChangeAmount(value: string): void {
    this.remunerationSelectionStatus.remuneration.amount.min = ((+value < 0) ? 0 : +value );
    this.valueChange.emit(this.remunerationSelectionStatus);
  }

  public onValueChanged($event: boolean): void {
    this.remunerationSelectionStatus.selected = $event;
    this.valueChange.emit(this.remunerationSelectionStatus);
  }

  public getValue(): number {
    return +this.remunerationSelectionStatus.remuneration.amount.min;
  }

}
