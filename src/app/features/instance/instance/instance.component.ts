import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { wowInstance } from 'src/app/shared/interfaces/instance';
import { InstancedataService } from 'src/app/shared/services/instancedata.service';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.scss']
})
export class InstanceComponent implements OnInit {

  currentInstance$: Observable<wowInstance>;

  constructor(private instanceDataService: InstancedataService) {
    this.currentInstance$ = this.getInstance$();
  }

  ngOnInit(): void {
  }

  private getInstance$(): Observable<wowInstance> {
    return this.instanceDataService.getCurrentInstance$();
  }
}
