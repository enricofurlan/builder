import { Directive, ViewContainerRef } from '@angular/core';
// marks insertion point
@Directive({
  //selector: '[ad-host]',
  // dynami
  selector: '[component-host]'
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
