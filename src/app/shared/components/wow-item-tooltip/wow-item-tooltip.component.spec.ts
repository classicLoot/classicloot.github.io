import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowItemTooltipComponent } from './wow-item-tooltip.component';

describe('WowItemTooltipComponent', () => {
  let component: WowItemTooltipComponent;
  let fixture: ComponentFixture<WowItemTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowItemTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WowItemTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
