import { Injectable } from '@angular/core';
import { mockData } from '../mock-data/mock-data';
import { Remuneration } from '../data.model';

@Injectable()
export class RemunerationsService {

  public getData() {
    return mockData;
  }

  public sendData(data: Remuneration[]) {
    console.log(data);
  }

}
