import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wow-item',
  templateUrl: './wow-item.component.html',
  styleUrls: ['./wow-item.component.scss']
})
export class WowItemComponent implements OnInit {

  @Input() itemID: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

}
