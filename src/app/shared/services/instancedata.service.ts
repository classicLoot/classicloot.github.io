import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, filter, map, Observable, share, shareReplay, switchMap } from 'rxjs';
import { wowInstance } from '../interfaces/instance';
import { wowAddon } from '../types/addon';
import { GlobalStoreService } from './global-store.service';

@Injectable({
  providedIn: 'root'
})
export class InstancedataService {

  private dungeonsMeta$!: Observable<wowInstance[]>;
  private raidssMeta$!: Observable<wowInstance[]>;

  private currentInstance$!: Observable<wowInstance>;

  constructor(private http: HttpClient, private globalStore: GlobalStoreService) { }

  public getDungeonsMeta$(addon: wowAddon) {
    if (!this.dungeonsMeta$) {
      this.dungeonsMeta$ = this.http.get<wowInstance[]>(`../../../assets/data/gen/${addon}/dungeons/meta.json`).pipe(
        shareReplay(1),
        map(arr => arr.sort((a, b) => a.levelMin! - b.levelMin!)),
        map(arr => arr.sort((a, b) => a.phase - b.phase))
      );
    }
    return this.dungeonsMeta$;
  }

  public getRaidsMeta$(addon: wowAddon) {
    if (!this.raidssMeta$) {
      this.raidssMeta$ = this.http.get<wowInstance[]>(`../../../assets/data/gen/${addon}/raids/meta.json`).pipe(shareReplay(1));
    }
    return this.raidssMeta$;
  }

  public getCurrentInstance$(): Observable<wowInstance> {
    if (!this.currentInstance$) {
      const state$ = this.globalStore.state$;
      const startType$ = this.globalStore.startType$;

      const combined$ = combineLatest([state$, startType$]).pipe(
        filter(data => data[1] != 'RIP'),
        filter(data => data[0].id != ''),
        switchMap(data => {
          if (data[1] === 'dungeons') {
            return this.http.get<wowInstance>(`../../../assets/data/gen/${data[0].addon}/dungeons/${data[0].id}.json`);
          }
          else {
            return this.http.get<wowInstance>(`../../../assets/data/gen/${data[0].addon}/raids/${data[0].id}.json`);
          }
        }),
        shareReplay(1)
      );

      this.currentInstance$ = combined$;
    }

    return this.currentInstance$;
  }
}
