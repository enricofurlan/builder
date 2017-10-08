import { Directive, ElementRef, HostListener, Input , HostBinding} from '@angular/core';

@Directive({
  selector: '[appDynamicChildren]'
})
export class DynamicChildrenDirective {

  private children = ['a', 'b', 'c'];

  constructor() { }

}
