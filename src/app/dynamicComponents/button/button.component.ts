import { Component, Input, Renderer2, ElementRef, AfterViewInit , OnChanges} from '@angular/core';
import { AdComponent } from '../ad-component/ad-component';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements AdComponent, AfterViewInit/*, OnChanges*/{
    @Input() data: any;
    //el: ElementRef;
    //r2: Renderer2;
    constructor(public el: ElementRef, public r2: Renderer2) {
      //  this.el = el;
        //this.r2 = r2;

    }

    // public setArea(area): void {
    //    this.r2.setStyle(this.el.nativeElement, 'grid-area', area);
    // }

    ngAfterViewInit() {
        // this.setArea(this.data.gridArea || 'content');
        // console.log(this.data);
    }

    // ngOnChanges() {
    //    console.log(this.data);
    // }


}
