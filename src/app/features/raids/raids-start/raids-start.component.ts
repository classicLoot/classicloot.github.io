import { Component, OnInit } from '@angular/core';
import { wowRaidListItem } from './raids-list';

@Component({
  selector: 'app-raids-start',
  templateUrl: './raids-start.component.html',
  styleUrls: ['./raids-start.component.scss']
})
export class RaidsStartComponent implements OnInit {

  public wowRaidsList: wowRaidListItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
