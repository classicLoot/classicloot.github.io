import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { wowRaid, wowRaidBossLazy, wowRaidLazy } from '../interfaces/raids';

@Injectable({
  providedIn: 'root'
})
export class RaiddataService {

  constructor(private http: HttpClient) { }

  public getRaidData$(id: string) {
    //const raid$ = this.http.get<wowRaid>(`../../../assets/data/raids/wotlk/${id}.json`);
    const raid$ = this.http.get<wowRaid>(`../../../assets/data/raidsSORTED/wotlk/${id}.json`);

    return raid$;
  }

  public getRaidDataLazy$(id: string) {
    const raid$ = this.http.get<wowRaidLazy>(`../../../assets/data/raidsLAZY/wotlk/${id}.json`);

    return raid$;
  }

  public getRaidBossDataLazy$(id: string, raid: string) {
    const raid$ = this.http.get<wowRaidBossLazy>(`../../../assets/data/raidsLAZY/wotlk/${raid}/${id}.json`);

    return raid$;
  }
}
