import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { wowCollection } from 'src/app/shared/interfaces/collection';
import { CollectionsdataService } from 'src/app/shared/services/collectionsdata.service';

@Component({
  selector: 'app-collections-start',
  templateUrl: './collections-start.component.html',
  styleUrls: ['./collections-start.component.scss']
})
export class CollectionsStartComponent implements OnInit {

  collectionsMeta$: Observable<wowCollection[]>;

  constructor(private collectionsDataService: CollectionsdataService) {
    this.collectionsMeta$ = this.collectionsDataService.getCollectionsMeta$('wotlk');
  }

  ngOnInit(): void {
  }

}
