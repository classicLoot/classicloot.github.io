import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowAchievementLazyComponent } from './wow-achievement-lazy.component';

describe('WowAchievementLazyComponent', () => {
  let component: WowAchievementLazyComponent;
  let fixture: ComponentFixture<WowAchievementLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowAchievementLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WowAchievementLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
