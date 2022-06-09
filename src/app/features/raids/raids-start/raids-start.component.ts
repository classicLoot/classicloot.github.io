import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { RaidsService } from '../data/raids.service';
import { wotlkRaids, wowRaidListItem } from './raids-list';

@Component({
  selector: 'app-raids-start',
  templateUrl: './raids-start.component.html',
  styleUrls: ['./raids-start.component.scss']
})
export class RaidsStartComponent implements OnInit {

  public wowRaidsList: wowRaidListItem[] = wotlkRaids;

  constructor(private sidebarService: SidebarService, private raidsService: RaidsService) {
    const menu = this.raidsService.getRaidsMenu();
    this.sidebarService.setMenuItems(menu);
  }

  ngOnInit(): void {
  }

}
