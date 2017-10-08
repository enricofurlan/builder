import { Component, OnInit, Input } from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

}
