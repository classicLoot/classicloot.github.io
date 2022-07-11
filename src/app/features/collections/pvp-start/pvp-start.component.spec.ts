import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpStartComponent } from './pvp-start.component';

describe('PvpStartComponent', () => {
  let component: PvpStartComponent;
  let fixture: ComponentFixture<PvpStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvpStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
