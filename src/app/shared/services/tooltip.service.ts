import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { wowItem } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  private mouseEventSubject = new BehaviorSubject({ x: 0, y: 0, bShown: false });
  private wowItemSubject = new BehaviorSubject<wowItem | null>(null);

  constructor() { }

  public onMouseEvent(e: MouseEvent, type: 'move' | 'enter' | 'leave', item: wowItem) {
    //console.log(type, item.name);
    this.wowItemSubject.next(item);

    if (type === 'leave') {
      this.mouseEventSubject.next({ x: e.clientX, y: e.clientY, bShown: false });
    }
    else {
      this.mouseEventSubject.next({ x: e.clientX, y: e.clientY, bShown: true });
    }
  }

  public getMouseEvent$() {
    return this.mouseEventSubject.asObservable().pipe(debounceTime(1));
  }

  public getWowItem$() {
    return this.wowItemSubject.asObservable().pipe();
  }

  public hideTooltip() {
    this.mouseEventSubject.next({ x: 0, y: 0, bShown: false });
  }
}
