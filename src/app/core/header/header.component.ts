import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainMenu: NbMenuItem[] = [
    {
      title: 'Dungeons',
      link: '/dungeon'
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
      link: '/rep'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
