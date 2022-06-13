import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowAchievementComponent } from './wow-achievement.component';

describe('WowAchievementComponent', () => {
  let component: WowAchievementComponent;
  let fixture: ComponentFixture<WowAchievementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowAchievementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WowAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
