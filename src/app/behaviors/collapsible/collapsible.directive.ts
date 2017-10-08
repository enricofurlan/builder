import { Directive, ElementRef, ChangeDetectorRef, Renderer2, Input , HostListener, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[collapsible]'
})
export class CollapsibleDirective implements OnInit {
  @Input() collapsible: String;
  // @HostBinding('class.'+this.collapsible+'--collapsed') collapsed;
  collapsedClass = 'collapsed';
  collapsed = false;
  // ne;
  // el;

  @HostListener('click') onClick() {
    this.toggle();
  }



  constructor(private hostElement: ElementRef, private cdRef: ChangeDetectorRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.collapsed = false;
    this.collapsedClass = this.collapsible + '--' + 'collapsed';
    // this.ne = this.el.nativeElement;
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this.collapsed ? this.renderer.addClass(this.hostElement.nativeElement, this.collapsedClass) : this.renderer.removeClass(this.hostElement.nativeElement, this.collapsedClass);

  }

}
