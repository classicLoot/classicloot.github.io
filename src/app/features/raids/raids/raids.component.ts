import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { wowRaid } from 'src/app/shared/interfaces/raids';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { RaidsService } from '../data/raids.service';

@Component({
  selector: 'app-raids',
  templateUrl: './raids.component.html',
  styleUrls: ['./raids.component.scss']
})
export class RaidsComponent implements OnInit, OnDestroy {

  private sub: any;

  currentRaid$: Observable<wowRaid>;

  constructor(private sidebarService: SidebarService, private raidService: RaidsService, private route: ActivatedRoute) {
    this.currentRaid$ = this.raidService.getCurrentRaid$();

    const menu = this.raidService.getRaidsMenu();
    this.sidebarService.setMenuItems(menu);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.raidService.setCurrentRaidName(id);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
