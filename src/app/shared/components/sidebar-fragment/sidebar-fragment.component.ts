import { Component, Input, OnInit } from '@angular/core';
import { menuItemExtended } from '../../interfaces/menuItemExtended';
import { FragmentService } from '../../services/fragment.service';

@Component({
  selector: 'app-sidebar-fragment',
  templateUrl: './sidebar-fragment.component.html',
  styleUrls: ['./sidebar-fragment.component.scss']
})
export class SidebarFragmentComponent implements OnInit {

  @Input() items: menuItemExtended[] = [];

  constructor(private fragmentService: FragmentService) { }

  ngOnInit(): void {
  }

  scrollTo(fragment: string) {
    this.fragmentService.scrollTo(fragment);
    return;
  }

}
