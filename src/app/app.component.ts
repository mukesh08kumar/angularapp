import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  data = [
    {
      mobileId: 1,
      mobileName: 'Android',
      mobileCost: 10000,
      mobileType: 'Smart'
    },
    {
      mobileId: 2,
      mobileName: 'iOS',
      mobileCost: 10000,
      mobileType: 'Basic'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.printMobileDetail();
  }

  printMobileDetail() {
    console.log(this.data);
  }

}
