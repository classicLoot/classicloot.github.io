import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReputationStartComponent } from './reputation-start.component';

describe('ReputationStartComponent', () => {
  let component: ReputationStartComponent;
  let fixture: ComponentFixture<ReputationStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReputationStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputationStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
