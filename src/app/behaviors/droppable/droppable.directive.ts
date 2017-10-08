import { Directive, ElementRef, HostListener, EventEmitter,Input ,Output} from '@angular/core';
import {DragService} from '../services/drag.service';

@Directive({
  selector: '[myDropTarget]'
})
export class DropTargetDirective {
  constructor(private dragService: DragService) {
  }

  @Input()
  set myDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }

  @Output('myDrop') drop = new EventEmitter();

  private options: DropTargetOptions = {};

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {

    const { zone = 'zone' } = this.options;

    if (this.dragService.accepts(zone)) {
       event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    //const data =  JSON.parse(event.dataTransfer.getData('Text'));
    //data.__grid_area = this.options.grid_area || null;
    const data = {userData: JSON.parse(event.dataTransfer.getData('Text')), gridArea: this.options.gridArea };
    this.drop.next(data);
    // should also stop event propagation...
  }
}
export interface DropTargetOptions {
  zone?: string;
  gridArea?: string;
}
