import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { wowInstance } from '../interfaces/instance';
import { wowAddon } from '../types/addon';

@Injectable({
  providedIn: 'root'
})
export class InstancedataService {

  constructor(private http: HttpClient) { }

  public getDungeonsMeta$(addon: wowAddon) {
    const meta$ = this.http.get<wowInstance[]>(`../../../assets/data/gen/dungeons/${addon}/meta.json`);
    return meta$;
  }

  public getRaidsMeta$(addon: wowAddon) {
    const meta$ = this.http.get<wowInstance[]>(`../../../assets/data/gen/raids/${addon}/meta.json`);
    return meta$;
  }
}
