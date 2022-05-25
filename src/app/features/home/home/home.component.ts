import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.setMenuItems([]);
  }

  ngOnInit(): void {
    console.log('ngOnInit home')
  }

}
