import { Component, Renderer2, OnInit, Input, ViewChildren, ViewChild, ComponentFactoryResolver, AfterViewInit, OnDestroy, QueryList, AfterContentChecked } from '@angular/core';

import { AdItem } from '../dynamicComponents/ad-item/ad-item';
import { AdComponent } from '../dynamicComponents//ad-component/ad-component';


import { BlueprintComponent } from '../dynamicComponents/blueprint/blueprint.component';
import { AdDirective } from '../dynamicComponents/ad-directive/ad.directive';
import { AdBannerComponent } from '../dynamicComponents/ad-banner/ad-banner.component';
import { ButtonComponent } from '../dynamicComponents/button/button.component';
import { AdService } from '../dynamicComponents/ad-service/ad.service';
import { DropdownComponent } from '../dynamicComponents/dropdown/dropdown.component';
import { SliderComponent } from '../dynamicComponents/slider/slider.component';
import { TableComponent } from '../dynamicComponents/table/table.component';
import { RadioComponent } from '../dynamicComponents/radio/radio.component';
import { CheckboxComponent } from '../dynamicComponents/checkbox/checkbox.component';
import { FieldComponent } from '../dynamicComponents/field/field.component';
import { CardComponent } from '../dynamicComponents/card/card.component';
import { CalendarComponent } from '../dynamicComponents/calendar/calendar.component';
import { MdBlockComponent } from '../dynamicComponents/md-block/md-block.component';
import { ImageComponent } from '../dynamicComponents/image/image.component';
import { ParagraphComponent } from '../dynamicComponents/paragraph/paragraph.component';
import { ListComponent } from '../dynamicComponents/list/list.component';
import { CodeComponent } from '../dynamicComponents/code/code.component';
import { TextareaComponent } from '../dynamicComponents/textarea/textarea.component';
import { LinkComponent } from '../dynamicComponents/link/link.component';
import { FileUploadComponent } from '../dynamicComponents/file-upload/file-upload.component';
import { ThreeDotsComponent } from '../dynamicComponents/three-dots/three-dots.component';
import { MenuComponent } from '../dynamicComponents/menu/menu.component';
import { LogoComponent } from '../dynamicComponents/logo/logo.component';
import { DropdownMenuComponent } from '../dynamicComponents/dropdown-menu/dropdown-menu.component';
import { DividerComponent } from '../dynamicComponents/divider/divider.component';






@Component({
    selector: 'simulator',
    templateUrl: './simulator.component.html',
    styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentChecked {

    // vdom = [];
    subscription: any;
    interval: any;
    @Input() ads: AdItem[] = [];
    currentAddIndex: number = -1;
    r2: Renderer2;


    @ViewChildren(AdDirective) viewChildren: QueryList<AdDirective>; // needs to be generated with a for loo pver items
    @ViewChild(AdDirective) adHost: AdDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, r2: Renderer2 ) {
        this.r2 = r2;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // this.loadComponent(); // load components
        // this.getAds();
        this.viewChildren.changes.subscribe(children => {
            console.log(children);
            this.loadComponent(this.ads[this.ads.length - 1], children._results[this.ads.length - 1]);
        });
    }
    // builder class
    onDrop(data: any) {
        // console.log('dropped:', data);
        let definition = null;
        switch (data.userData) {

            case 'button':
                definition = ButtonComponent;
                break;
            case 'dropdown':
                definition = DropdownComponent;
                break;
            case 'slider':
                definition = SliderComponent;
                break;
            case 'table':
                definition = TableComponent;
                break;
            case 'radio':
                definition = RadioComponent;
                break;
            case 'checkbox':
                definition = CheckboxComponent;
                break;
            case 'field':
                definition = FieldComponent;
                break;
            case 'card':
                definition = CardComponent;
                break;
            case 'calendar':
                definition = CalendarComponent;
                break;
            case 'mdBlock':
                definition = MdBlockComponent;
                break;
            case 'image':
                definition = ImageComponent;
                break;
            case 'paragraph':
                definition = ParagraphComponent;
                break;
            case 'list':
                definition = ListComponent;
                break;
            case 'code':
                definition = CodeComponent;
                break;
            case 'textArea':
                definition = TextareaComponent;
                break;
            case 'link':
                definition = LinkComponent;
                break;
            case 'fileUpload':
                definition = FileUploadComponent;
                break;
            case 'threeDots':
                definition = ThreeDotsComponent;
                break;
            case 'menu':
                definition = MenuComponent;
                break;
            case 'logo':
                definition = LogoComponent;
                break;
            case 'dropdownMenu':
                definition = DropdownMenuComponent;
                break;
            case 'divider':
                definition = DividerComponent;
                break;
            default:
                definition = ButtonComponent;
        }


        // NEW!
        const newComponent = new AdItem(definition, { name: 'Bombasto', bio: 'Brave as they come', gridArea: data.gridArea });
        this.ads.push(newComponent);

    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    ngAfterContentChecked() {
        console.log(event);
    }

    public setArea(comp, area): void {
        this.r2.setStyle(comp.el.nativeElement, 'grid-area', area);
    }

    loadComponent(newComponent, adHost) {
        // this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
        // let adItem = this.ads[this.currentAddIndex];

        const adItem = newComponent;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        const viewContainerRef = adHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);

        // componentRef._component.setArea(); // set area is defined in draggable
        this.setArea(componentRef._component, newComponent.data.gridArea);
        const instance = (<AdComponent>componentRef.instance);

        // this.r2.setStyle(componentRef,'grid-area','header');
        // componentRef._view.renderer.setStyle('grid-area', 'header');



        instance.data = adItem.data;
        // console.log(instance.data, adItem.data);

        // instance.setArea();
    }

    /*getAds() {
      this.interval = setInterval(() => {
        this.loadComponent();
      }, 3000);
    }*/



}
