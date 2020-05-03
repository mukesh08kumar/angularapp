import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basicphone',
  templateUrl: './basicphone.component.html',
  styleUrls: ['./basicphone.component.scss']
})
export class BasicphoneComponent implements OnInit {
  @Input() mobileType: string;
  constructor() { }

  ngOnInit(): void {
  }

}
