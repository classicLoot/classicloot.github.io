import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { wowItem } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  private mouseEventSubject = new BehaviorSubject({ x: 0, y: 0, bShown: false });
  private wowItemSubject = new BehaviorSubject<wowItem | null>(null);

  constructor() { }

  public onMouseEvent(e: MouseEvent, type: 'move' | 'enter' | 'leave', item: wowItem) {
    console.log(type, item.name);
    if (type === 'leave') {
      this.mouseEventSubject.next({ x: e.clientX, y: e.clientY, bShown: false });
    }
    else {
      this.mouseEventSubject.next({ x: e.clientX, y: e.clientY, bShown: true });
    }
    this.wowItemSubject.next(item);
  }

  public getMouseEvent$() {
    return this.mouseEventSubject.asObservable();
  }

  public getWowItem$() {
    return this.wowItemSubject.asObservable();
  }
}
