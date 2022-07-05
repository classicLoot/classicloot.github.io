import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { menuItemExtended } from '../../interfaces/menuItemExtended';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-fragment',
  templateUrl: './sidebar-fragment.component.html',
  styleUrls: ['./sidebar-fragment.component.scss']
})
export class SidebarFragmentComponent implements OnInit {

  @Input() items: menuItemExtended[] = [];

  constructor(private viewportScroller: ViewportScroller, private location: Location, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  scrollTo(fragment: string) {
    //console.log('scrollTo', fragment)
    this.viewportScroller.scrollToAnchor(fragment);
    const url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, fragment: fragment }).toString();

    this.location.go(url);
  }

}
