import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  legend = 'Legend';

  // options
  debug = false;
  inline = true;

  items: any[] = [
    {
      id: 'item1',
      label: 'item1',
      value: 1,
      checked: true

    },
    {
      id: 'item2',
      label: 'item2',
      value: 2,
      checked: false

    }
  ];
  constructor() { }

  ngOnInit() {
  }

  toggleChecked(index){
    // debugger;
    this.items[index].checked = !this.items[index].checked;
  }

}
