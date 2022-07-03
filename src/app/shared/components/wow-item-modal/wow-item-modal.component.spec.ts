import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowItemModalComponent } from './wow-item-modal.component';

describe('WowItemModalComponent', () => {
  let component: WowItemModalComponent;
  let fixture: ComponentFixture<WowItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WowItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
