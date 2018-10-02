import { Component, Input, OnInit, Output } from '@angular/core';
import { RemunerationSelectionStatus } from '../data.model';

@Component({
  selector: 'app-remuneration',
  templateUrl: './remuneration.component.html',
  styleUrls: ['./remuneration.component.scss']
})
export class RemunerationComponent implements OnInit {

  @Input() remunerationSelectionStatus: RemunerationSelectionStatus;
  @Output() valueChange: RemunerationSelectionStatus;

  constructor() { }

  ngOnInit() {}

  public isDisabled(): boolean {
    return false;
  }

}
