import { AfterViewInit, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { wowItem } from '../../interfaces/item';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-wow-item-modal',
  templateUrl: './wow-item-modal.component.html',
  styleUrls: ['./wow-item-modal.component.scss']
})
export class WowItemModalComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('modalTemplate') modalTemplateRef!: TemplateRef<any>
  @Input() itemSize: string = 'large';

  private sub: Subscription;
  public modalItem: wowItem | null = null;

  constructor(private modalService: ModalService) {
    const item$ = this.modalService.itemSubject.asObservable();
    this.sub = item$.subscribe(value => {
      console.log('sub', value)
      this.setupWindow(value);
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
  }

  public close() {
    console.log('close')
    this.modalService.setItem(null);
  }

  public setupWindow(item: wowItem | null) {
    const modalRef = document.getElementById(`myModal`);
    if (!modalRef) {
      return;
    }

    modalRef.style.display = item ? 'block' : 'none';

    const tooltipIcon = document.getElementById(`modalTooltipIcon`) as HTMLImageElement;
    const tooltipContent = document.getElementById(`modalTooltipContent`);

    if (item && tooltipIcon && tooltipContent) {

      // Icon
      tooltipIcon.src = `../../../../assets/icons/${this.itemSize}/${item.icon}.jpg`

      // HTML
      tooltipContent.innerHTML = item.htmlTooltip;

      this.modalItem = item;
    }
  }

}
