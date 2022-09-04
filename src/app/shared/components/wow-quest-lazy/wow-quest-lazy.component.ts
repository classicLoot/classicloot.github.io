import { Component, Input, OnInit } from '@angular/core';
import { wowQuest } from '../../interfaces/collection';

@Component({
  selector: 'app-wow-quest-lazy',
  templateUrl: './wow-quest-lazy.component.html',
  styleUrls: ['./wow-quest-lazy.component.scss']
})
export class WowQuestLazyComponent implements OnInit {

  @Input() quest!: wowQuest;

  constructor() { }

  ngOnInit(): void {
  }

}
