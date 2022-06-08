import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { wowRaidBoss } from 'src/app/shared/interfaces/raids';

@Component({
  selector: 'app-raidboss-lazy',
  templateUrl: './raidboss-lazy.component.html',
  styleUrls: ['./raidboss-lazy.component.scss']
})
export class RaidbossLazyComponent implements OnInit, AfterViewInit {

  @Input() boss!: wowRaidBoss;
  @Input() raidType: 'A' | 'B' | 'C' = 'A';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('ViewInit ' + this.boss.name)
  }

}
