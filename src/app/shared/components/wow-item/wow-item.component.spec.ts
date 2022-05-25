import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowItemComponent } from './wow-item.component';

describe('WowItemComponent', () => {
  let component: WowItemComponent;
  let fixture: ComponentFixture<WowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
