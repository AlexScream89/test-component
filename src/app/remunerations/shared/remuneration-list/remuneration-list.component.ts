import { Component, Input, OnInit, Output } from '@angular/core';
import { RemunerationSelectionStatus } from '../data.model';

@Component({
  selector: 'app-remuneration-list',
  templateUrl: './remuneration-list.component.html',
  styleUrls: ['./remuneration-list.component.scss']
})
export class RemunerationListComponent implements OnInit {

  @Input() title: string;
  @Input() label: string;
  @Input() remunerationSelectionStatusList: RemunerationSelectionStatus[];
  @Output() valueChange: RemunerationSelectionStatus[];

  constructor() { }

  ngOnInit() {
  }

}
