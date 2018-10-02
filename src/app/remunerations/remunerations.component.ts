import { Component, OnInit } from '@angular/core';
import { RemunerationsService } from './shared/providers/remunerations.service';
import { remunerationConts } from './shared/remunerations.const';

interface Panel {
  title: string;
  label: string;
}

@Component({
  selector: 'app-remunerations',
  templateUrl: './remunerations.component.html',
  styleUrls: ['./remunerations.component.scss']
})
export class RemunerationsComponent implements OnInit {

  public leftPanel: Panel;
  public rightPanel: Panel;

  constructor(private remunerationsService: RemunerationsService) {}

  ngOnInit() {
    this.leftPanel = remunerationConts.left;
    this.rightPanel = remunerationConts.right;
    this.getData();
  }

  private getData(): void {
    this.remunerationsService.getData();
  }

}
