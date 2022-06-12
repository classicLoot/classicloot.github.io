import { Component } from '@angular/core';
import { GlobalStoreService } from './shared/services/global-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'classicloot';

  constructor(private globalStore: GlobalStoreService) {

  }
}
