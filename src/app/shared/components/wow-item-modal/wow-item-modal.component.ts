import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { wowItem } from '../../interfaces/item';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-wow-item-modal',
  templateUrl: './wow-item-modal.component.html',
  styleUrls: ['./wow-item-modal.component.scss']
})
export class WowItemModalComponent implements OnInit, OnDestroy {
  @ViewChild('modalTemplate') modalTemplateRef!: TemplateRef<any>
  @Input() itemSize: string = 'large';

  private sub: Subscription;

  private buttonCFG: NbWindowControlButtonsConfig = {
    minimize: false,
    maximize: false,
    fullScreen: false,
    close: true
  }

  constructor(private windowService: NbWindowService, private modalService: ModalService) {
    this.sub = this.modalService.itemSubject.asObservable().subscribe(value => {
      if (value) {
        const windowTemplateRef = this.windowService.open(
          this.modalTemplateRef,
          { title: 'Tooltip', buttons: this.buttonCFG, context: { item: value } }
        )
        this.setupWindow(value);

      }
      else {
        console.log('NULLS')
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private setupWindow(item: wowItem) {
    const tooltipBase = document.getElementById(`modalTooltipBase`);
    const tooltipIcon = document.getElementById(`modalTooltipIcon`) as HTMLImageElement;
    const tooltipContent = document.getElementById(`modalTooltipContent`);


    if (item && tooltipBase && tooltipIcon && tooltipContent) {
      console.log('setupWindow', item.name)

      // Icon
      tooltipIcon.src = `../../../../assets/icons/${this.itemSize}/${item.icon}.jpg`

      // HTML
      tooltipContent.innerHTML = item.htmlTooltip;
    }
  }

}
