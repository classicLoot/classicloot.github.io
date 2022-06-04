import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { RaidsService } from '../data/raids.service';

@Component({
  selector: 'app-raids-start',
  templateUrl: './raids-start.component.html',
  styleUrls: ['./raids-start.component.scss']
})
export class RaidsStartComponent implements OnInit {

  constructor(private sidebarService: SidebarService, private raidsService: RaidsService) {
    this.sidebarService.setMenuItems([]);
  }

  ngOnInit(): void {
  }

}
