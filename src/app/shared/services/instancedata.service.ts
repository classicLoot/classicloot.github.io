import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { wowInstance } from '../interfaces/instance';
import { wowAddon } from '../types/addon';

@Injectable({
  providedIn: 'root'
})
export class InstancedataService {

  private dungeonsMeta$!: Observable<wowInstance[]>;
  private raidssMeta$!: Observable<wowInstance[]>;

  constructor(private http: HttpClient) { }

  public getDungeonsMeta$(addon: wowAddon) {
    if (!this.dungeonsMeta$) {
      this.dungeonsMeta$ = this.http.get<wowInstance[]>(`../../../assets/data/gen/dungeons/${addon}/meta.json`).pipe(
        shareReplay(1),
        map(arr => arr.sort((a, b) => a.levelMin! - b.levelMin!)),
        map(arr => arr.sort((a, b) => a.phase - b.phase))
      );
    }
    return this.dungeonsMeta$;
  }

  public getRaidsMeta$(addon: wowAddon) {
    if (!this.raidssMeta$) {
      this.raidssMeta$ = this.http.get<wowInstance[]>(`../../../assets/data/gen/raids/${addon}/meta.json`).pipe(shareReplay(1));
    }
    return this.raidssMeta$;
  }
}
