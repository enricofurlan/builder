import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentPaletteComponent } from './component-palette/component-palette.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { PickableDirective } from './behaviors/pickable/pickable.directive';
import { DropTargetDirective } from './behaviors/droppable/droppable.directive';
import { DragService } from './behaviors/services/drag.service';
import { MockDataService } from './behaviors/services/mock-data.service';
import { BlueprintComponent } from './dynamicComponents/blueprint/blueprint.component';
import { AdDirective } from './dynamicComponents/ad-directive/ad.directive';
import { AdBannerComponent } from './dynamicComponents/ad-banner/ad-banner.component';
import { ButtonComponent } from './dynamicComponents/button/button.component';
import { AdService } from './dynamicComponents/ad-service/ad.service';
import { DropdownComponent } from './dynamicComponents/dropdown/dropdown.component';
import { SliderComponent } from './dynamicComponents/slider/slider.component';
import { TableComponent } from './dynamicComponents/table/table.component';

import { RadioComponent } from './dynamicComponents/radio/radio.component';
import { CheckboxComponent } from './dynamicComponents/checkbox/checkbox.component';
import { FieldComponent } from './dynamicComponents/field/field.component';
import { CardComponent } from './dynamicComponents/card/card.component';
import { CollapsibleDirective } from './behaviors/collapsible/collapsible.directive';
import { CalendarComponent } from './dynamicComponents/calendar/calendar.component';
import { MdBlockComponent } from './dynamicComponents/md-block/md-block.component';
import { ImageComponent } from './dynamicComponents/image/image.component';
import { ParagraphComponent } from './dynamicComponents/paragraph/paragraph.component';
import { ListComponent } from './dynamicComponents/list/list.component';
import { CodeComponent } from './dynamicComponents/code/code.component';
import { TextareaComponent } from './dynamicComponents/textarea/textarea.component';
import { LinkComponent } from './dynamicComponents/link/link.component';
import { FileUploadComponent } from './dynamicComponents/file-upload/file-upload.component';
import { ThreeDotsComponent } from './dynamicComponents/three-dots/three-dots.component';
import { MenuComponent } from './dynamicComponents/menu/menu.component';
import { LogoComponent } from './dynamicComponents/logo/logo.component';
import { DropdownMenuComponent } from './dynamicComponents/dropdown-menu/dropdown-menu.component';
import { DividerComponent } from './dynamicComponents/divider/divider.component';
import { DynamicChildrenDirective } from './behaviors/dynamic-children/dynamic-children.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPaletteComponent,
    SimulatorComponent,
    PickableDirective,
    DropTargetDirective,
    BlueprintComponent,
    AdDirective,
    AdBannerComponent,
    ButtonComponent,
    DropdownComponent,
    SliderComponent,
    TableComponent,

    RadioComponent,
    CheckboxComponent,
    FieldComponent,
    CardComponent,
    CollapsibleDirective,
    CalendarComponent,
    MdBlockComponent,
    ImageComponent,
    ParagraphComponent,
    ListComponent,
    CodeComponent,
    TextareaComponent,
    LinkComponent,
    FileUploadComponent,
    ThreeDotsComponent,
    MenuComponent,
    LogoComponent,
    DropdownMenuComponent,
    DividerComponent,
    DynamicChildrenDirective
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ButtonComponent,
    DropdownComponent,
    SliderComponent,
    TableComponent,
    RadioComponent,
    CheckboxComponent,
    FieldComponent,
    CardComponent,
    CalendarComponent,
    MdBlockComponent,
    ImageComponent,
    ParagraphComponent,
    ListComponent,
    CodeComponent,
    TextareaComponent,
    LinkComponent,
    FileUploadComponent,
    ThreeDotsComponent,
    MenuComponent,
    LogoComponent,
    DropdownMenuComponent,
    DividerComponent

  ],
  providers: [DragService, MockDataService, AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
