import { Injectable } from '@angular/core';

@Injectable()
export class MockDataService {

  public components: any; // iterator ? // rxjs stream ?

  constructor() {
    this.components = [
      `<div [myDraggable]="{data: 'Draggable 1'}">Drag me</div>`,
      `<div [myDraggable]="{data: 'Draggable 1'}">Drag me</div>`
    ];
  }

  getComponents(): any {
    return this.components;
  }



}
