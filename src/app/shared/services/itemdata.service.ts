import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
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
}
