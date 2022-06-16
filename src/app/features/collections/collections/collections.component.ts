import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { wowCollection } from 'src/app/shared/interfaces/collection';
import { CollectionsdataService } from 'src/app/shared/services/collectionsdata.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  currentCollection$: Observable<wowCollection>;

  constructor(private collectionDataService: CollectionsdataService) {
    this.currentCollection$ = this.collectionDataService.getCurrentCollection$();
  }

  ngOnInit(): void {
  }

}
