import { MockDataService } from '../behaviors/services/mock-data.service';
import { Component, OnInit } from '@angular/core';
import {AdItem} from '../dynamicComponents/ad-item/ad-item';
import {AdService} from '../dynamicComponents/ad-service/ad.service';

@Component({
  selector: 'component-palette',
  templateUrl: './component-palette.component.html',
  styleUrls: ['./component-palette.component.css']
})
export class ComponentPaletteComponent implements OnInit {
  public components: any;
  ads: AdItem[];
  public md: MockDataService;
  constructor(private adService: AdService) {
    this.md = new MockDataService();
    this.components = this.md.getComponents();
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
