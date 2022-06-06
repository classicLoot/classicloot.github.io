import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { wowRaid } from '../interfaces/raids';

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
}
