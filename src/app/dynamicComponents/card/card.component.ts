import { Component, Input, Renderer2, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent  {

    constructor(public el: ElementRef, public r2: Renderer2) { }



    onDrop(data: any) {
        console.log('dropped:', data, this);
        event.stopPropagation();
    }

}
