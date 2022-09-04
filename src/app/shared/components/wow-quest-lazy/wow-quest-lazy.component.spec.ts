import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowQuestLazyComponent } from './wow-quest-lazy.component';

describe('WowQuestLazyComponent', () => {
  let component: WowQuestLazyComponent;
  let fixture: ComponentFixture<WowQuestLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowQuestLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WowQuestLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
