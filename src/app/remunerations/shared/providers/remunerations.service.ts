import { Injectable } from '@angular/core';
import { mockData } from '../mock-data/mock-data';

@Injectable()
export class RemunerationsService {

  public getData() {
    return mockData;
  }

}
