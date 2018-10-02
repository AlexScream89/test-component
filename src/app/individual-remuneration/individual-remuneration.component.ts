import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RemunerationsService } from './shared/providers/remunerations.service';
import { remunerationConts } from './shared/remunerations.const';
import { Remuneration, RemunerationSelectionStatus } from './shared/data.model';

interface Panel {
  title: string;
  label: string;
  items: string[];
}

@Component({
  selector: 'app-individual-remuneration',
  templateUrl: './individual-remuneration.component.html',
  styleUrls: ['./individual-remuneration.component.scss']
})
export class IndividualRemunerationComponent implements OnInit {

  @Input() remunerations: Remuneration[];
  @Output() valueChange: EventEmitter<Remuneration[]> = new EventEmitter();

  public leftPanel: Panel;
  public rightPanel: Panel;
  public remunerationLeft: RemunerationSelectionStatus[] = [];
  public remunerationRight: RemunerationSelectionStatus[] = [];
  private panelsData: RemunerationSelectionStatus[] = [];
  private mergedSelectedRemunerations: Remuneration[] = [];
  private data = [];

  constructor(private remunerationsService: RemunerationsService) {}

  ngOnInit() {
    this.leftPanel = remunerationConts.left;
    this.rightPanel = remunerationConts.right;
    this.getData();
  }

  public validate(): void {
    if (this.isDisabled()) {
      return;
    }
    this.submit();
  }

  public submit(): void {
    this.valueChange.emit(this.mergedSelectedRemunerations);
    console.log('data', this.mergedSelectedRemunerations);
  }

  public cancel(): void {}

  public leftChanged($event: RemunerationSelectionStatus[]): void {
    this.remunerationLeft = [...$event];
    this.mergePanels();
  }

  public rightChanged($event: RemunerationSelectionStatus[]): void {
    this.remunerationRight = [...$event];
    this.mergePanels();
  }

  public isDisabled(): boolean {
    return (this.mergedSelectedRemunerations.length < 1);
  }

  public mergePanels(): void {
    this.panelsData = [...this.remunerationLeft, ...this.remunerationRight];
    this.getSelectedData();
    this.isDisabled();
  }

  private getSelectedData(): void {
    this.mergedSelectedRemunerations = [];
    this.panelsData.forEach(item => {
      if (!item.selected) {
        return;
      }
      this.mergedSelectedRemunerations.push(item.remuneration);
    });
  }

  private getData(): void {
    this.data = this.remunerationsService.getData();
    this.remunerationLeft = this.getPanelData(this.leftPanel);
    this.remunerationRight = this.getPanelData(this.rightPanel);
    this.mergePanels();
  }

  private getPanelData(data): RemunerationSelectionStatus[] {
    const array = [];
    data.items.forEach(item => {
      const index = this.data.findIndex(el => el.contractType.toLowerCase() === item.toLowerCase());
      if (index < 0) {
        const arrData: Remuneration = {
          'contractType': item,
          'amount': {
            'min': 0
          }
        };
        array.push({remuneration: arrData, selected: false});
      } else {
        array.push({remuneration: this.data[index], selected: true});
      }
    });
    return array;
  }

}
