import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  @Input() label: string;
  @Input() toggled: boolean;
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public changeStatus(): void {
    this.toggled = !this.toggled;
    this.valueChange.emit(this.toggled);
  }

}
