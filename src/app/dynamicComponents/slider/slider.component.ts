import { Component, OnInit } from '@angular/core';
import {AdComponent} from '../ad-component/ad-component';
import {Input} from '@angular/core';
import * as electron from 'electron';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AdComponent {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    //console.log(electron.app.getAppPath());
  }

}
