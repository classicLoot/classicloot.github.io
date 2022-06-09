import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidbossLazyComponent } from './raidboss-lazy.component';

describe('RaidbossLazyComponent', () => {
  let component: RaidbossLazyComponent;
  let fixture: ComponentFixture<RaidbossLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidbossLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidbossLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
