import { Injectable } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';
import { wowDifficulty, wowFaction, wowSize } from '../types/options';

interface filterProps {
  faction: wowFaction,
  difficulty: wowDifficulty,
  size: wowSize
}

@Injectable({
  providedIn: 'root'
})
export class FilterStoreService {

  private store = createStore(
    { name: 'filter' },
    withProps<filterProps>({ faction: 'Alliance', difficulty: 'Normal', size: 10 })
  );

  public state$ = this.store.pipe(select((state) => state));

  public faction$ = this.store.pipe(select((state) => state.faction));
  public difficulty$ = this.store.pipe(select((state) => state.difficulty));
  public size$ = this.store.pipe(select((state) => state.size));

  constructor() { }

  public updateFaction(newFaction: wowFaction) {
    this.store.update((state) => ({
      ...state,
      faction: newFaction
    }))
  }

  public updateDifficulty(newDiff: wowDifficulty) {
    this.store.update((state) => ({
      ...state,
      difficulty: newDiff
    }))
  }

  public updateSize(newSize: wowSize) {
    this.store.update((state) => ({
      ...state,
      size: newSize
    }))
  }

  public getSize() {
    return this.store.getValue().size;
  }
}
