import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  @Input() data: any;
  mobileId: number;
  mobileName: string;
  mobileCost: number;
  mobileType: string;

  constructor() { }

  ngOnInit(): void {
    if (this.data) {
      this.mobileId = this.data.mobileId;
      this.mobileName = this.data.mobileName;
      this.mobileCost = this.data.mobileCost;
      this.mobileType = this.data.mobileType;
      console.log(this.data);
    }
  }

}
