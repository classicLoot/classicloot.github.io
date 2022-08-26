import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { wowCollection } from 'src/app/shared/interfaces/collection';
import { FragmentService } from 'src/app/shared/services/fragment.service';
import { GlobalStoreService } from 'src/app/shared/services/global-store.service';

@Component({
  selector: 'app-collectionsx',
  templateUrl: './collectionsx.component.html',
  styleUrls: ['./collectionsx.component.scss']
})
export class CollectionsxComponent implements OnInit {

  route$: Observable<string>;
  collection$: Observable<wowCollection>

  constructor(private http: HttpClient, private globalStore: GlobalStoreService, private fragmentService: FragmentService) {
    this.route$ = this.globalStore.route$;

    this.collection$ = this.route$.pipe(
      switchMap(route => {
        return this.http.get<wowCollection>(`../../../../wowdata/output/${route}.json`)
      }),
      tap(collection => {
        this.fragmentService.setFragments(collection);
      })
    )
  }

  ngOnInit(): void {
  }

}
