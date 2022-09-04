import { Injectable } from '@angular/core';

import { GlobalStoreService } from './global-store.service';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private globalStore: GlobalStoreService) {

  }
}
