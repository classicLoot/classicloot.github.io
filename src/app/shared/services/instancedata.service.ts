import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, shareReplay, switchMap } from 'rxjs';
import { wowInstance, wowInstanceBoss } from '../interfaces/instance';
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
      this.raidssMeta$ = this.http.get<wowInstance[]>(`../../../assets/data/gen/${addon}/raids/meta.json`).pipe(
        shareReplay(1),
        map(arr => arr.sort((a, b) => a.levelMin! - b.levelMin!)),
        map(arr => arr.sort((a, b) => a.phase - b.phase))
      );
    }
    return this.raidssMeta$;
  }

  public getCurrentInstance$(): Observable<wowInstance> {
    if (!this.currentInstance$) {
      const state$ = this.globalStore.state$;

      const current$ = state$.pipe(
        switchMap(state => {
          if (state.route === '/raids' || state.route === '/dungeons') {
            const emptyInstance: wowInstance = { name: 'ERROR', link: '', phase: -666, size: 40 }
            return of(emptyInstance)
          }

          if (state.route.includes('#')) {
            const fixed = state.route.slice(0, state.route.indexOf('#'));
            return this.http.get<wowInstance>(`../../../assets/data/gen/${state.addon}${fixed}.json`);
          }
          return this.http.get<wowInstance>(`../../../assets/data/gen/${state.addon}${state.route}.json`);
        })
      )
      this.currentInstance$ = current$;
    }

    return this.currentInstance$;
  }

  public getCurrentInstanceBoss$(boss: string): Observable<wowInstanceBoss> {
    const state = this.globalStore.getStoreValue();

    let current$: Observable<wowInstanceBoss>;

    if (state.route.includes('#')) {
      const fixed = state.route.slice(0, state.route.indexOf('#'));
      current$ = this.http.get<wowInstanceBoss>(`../../../assets/data/gen/${state.addon}${fixed}/${boss}.json`)
    }
    else {
      current$ = this.http.get<wowInstanceBoss>(`../../../assets/data/gen/${state.addon}${state.route}/${boss}.json`)
    };

    return current$;
  }
}
