import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainMenu: NbMenuItem[] = [
    {
      title: 'Dungeons',
      link: '/dungeons'
    },
    {
      title: 'Raids',
      link: '/raids'
    },
    {
      title: 'Crafting',
      link: '/crafting'
    },
    {
      title: 'PVP',
      link: '/pvp'
    },
    {
      title: 'Reputation',
      link: '/reputation'
    }
  ]

  constructor(private nbSidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.nbSidebarService.toggle(false, 'leftSidebar');
  }

}
