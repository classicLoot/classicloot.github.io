import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { wowCollectionSubLink, wowSubCollection } from 'src/app/shared/interfaces/collection';
import { CollectionsdataService } from 'src/app/shared/services/collectionsdata.service';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss']
})
export class CollectionCardComponent implements OnInit, OnChanges {

  @Input() subLink!: wowCollectionSubLink;

  sub$!: Observable<wowSubCollection>;

  constructor(private collectionsDataService: CollectionsdataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sub$ = this.collectionsDataService.getCurrentSubCollection$(this.subLink.link);
  }

}
