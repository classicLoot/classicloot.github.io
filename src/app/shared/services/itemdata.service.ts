import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { wowAchievement } from '../interfaces/achievement';
import { wowItem } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemdataService {

  constructor(private http: HttpClient) { }

  public getItemData$(id: number) {
    const item$ = this.http.get<wowItem>(`../../../assets/items/${String(id)}.json`)

    return item$;
  }

  public getAVData$(id: number) {
    const av$ = this.http.get<wowAchievement>(`../../../assets/achievements/power/${String(id)}.json`);

    return av$;
  }
}
