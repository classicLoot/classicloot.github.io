import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { wowAchievement } from '../../interfaces/achievement';
import { GlobalStoreService } from '../../services/global-store.service';
import { ItemdataService } from '../../services/itemdata.service';

@Component({
  selector: 'app-wow-achievement',
  templateUrl: './wow-achievement.component.html',
  styleUrls: ['./wow-achievement.component.scss']
})
export class WowAchievementComponent implements OnInit, OnChanges {

  @Input() avID!: number;
  @Input() descr!: string;

  public av$!: Observable<wowAchievement>;
  public mobile$: Observable<boolean>;

  constructor(private itemDataService: ItemdataService, private globalStore: GlobalStoreService) {
    this.mobile$ = this.globalStore.mobile$;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.av$ = this.itemDataService.getAVData$(this.avID);
  }

}
