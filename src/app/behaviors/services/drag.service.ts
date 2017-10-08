import { Injectable } from '@angular/core';
import {MockDataService} from './mock-data.service';

@Injectable()
export class DragService {
  private zone: string;


  startDrag(zone: string) {
    this.zone = zone;
  }

  accepts(zone: string): boolean {
    return zone == this.zone;
  }
}


