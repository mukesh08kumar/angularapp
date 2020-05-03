import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.scss']
})
export class SmartphoneComponent implements OnInit {
  @Input() mobileType: string;
  constructor() { }

  ngOnInit(): void {
  }

}
