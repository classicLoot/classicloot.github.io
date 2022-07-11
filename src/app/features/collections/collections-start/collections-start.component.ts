import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { wowCollection } from 'src/app/shared/interfaces/collection';
import { CollectionsdataService } from 'src/app/shared/services/collectionsdata.service';
import { GlobalStoreService, startType } from 'src/app/shared/services/global-store.service';

@Component({
  selector: 'app-collections-start',
  templateUrl: './collections-start.component.html',
  styleUrls: ['./collections-start.component.scss']
})
export class CollectionsStartComponent implements OnInit {

  collectionsMeta$: Observable<wowCollection[]>;
  startType$: Observable<startType>;

  constructor(private collectionsDataService: CollectionsdataService, private globalStore: GlobalStoreService) {
    this.collectionsMeta$ = this.collectionsDataService.getCollectionsMeta$('wotlk');
    this.startType$ = this.globalStore.startType$;
  }

  ngOnInit(): void {
  }

}
