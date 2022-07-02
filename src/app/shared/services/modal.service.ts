import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { wowItem } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public itemSubject = new BehaviorSubject<wowItem | null>(null);

  constructor() { }

  public setItem(newItem: wowItem | null) {
    //console.log('setItem', newItem);
    this.itemSubject.next(newItem);
  }
}
