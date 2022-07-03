import { AfterViewInit, Component, Input, OnDestroy, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
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

  private unlistener!: () => void;

  constructor(private modalService: ModalService, private renderer: Renderer2) {
    const item$ = this.modalService.itemSubject.asObservable();
    this.sub = item$.subscribe(value => {
      //console.log('sub', value)
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
    //console.log('close')
    this.modalService.setItem(null);
    this.unlistener();
  }

  public doNothing() {
    //console.log('DO NOTHING')
  }

  public setupWindow(item: wowItem | null) {
    const modalRef = document.getElementById(`myModal`);
    if (!modalRef) {
      return;
    }

    modalRef.style.display = item ? 'block' : 'none';


    if (this.unlistener) {
      this.unlistener();
    }

    this.unlistener = this.renderer.listen(modalRef, 'click', event => {
      const pEvent = event as PointerEvent;

      const modalContent = document.getElementById('modalBase');
      if (!modalContent) {
        return;
      }
      const bounds = modalContent.getBoundingClientRect();

      if (pEvent.clientX < bounds.x || pEvent.clientX > bounds.x + bounds.width || pEvent.clientY < bounds.y || pEvent.clientY > bounds.y + bounds.height) {
        this.close();
      }
    })

    const tooltipIcon = document.getElementById(`modalTooltipIcon`) as HTMLImageElement;
    const tooltipContent = document.getElementById(`modalTooltipContent`);

    if (item && tooltipIcon && tooltipContent) {

      // Icon
      tooltipIcon.src = `../../../../assets/icons/${this.itemSize}/${item.icon}.jpg`

      // HTML
      tooltipContent.innerHTML = this.removeLinks(item.htmlTooltip);
      //console.log(tooltipContent.innerHTML);

      this.modalItem = item;
    }
  }

  private removeLinks(html: string): string {
    let fixed = html.replace('\\', '').replace('<a', '<span').replace('a>', 'span>');
    fixed = fixed.replace('<a', '<span').replace('a>', 'span>');
    fixed = fixed.replace('<a', '<span').replace('a>', 'span>');
    fixed = fixed.replace('<a', '<span').replace('a>', 'span>');
    return fixed;
  }
}
