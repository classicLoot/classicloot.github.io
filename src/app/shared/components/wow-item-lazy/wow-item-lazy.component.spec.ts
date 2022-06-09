import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowItemLazyComponent } from './wow-item-lazy.component';

describe('WowItemLazyComponent', () => {
  let component: WowItemLazyComponent;
  let fixture: ComponentFixture<WowItemLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowItemLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WowItemLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
