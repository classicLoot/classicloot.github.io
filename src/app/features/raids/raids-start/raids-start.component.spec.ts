import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidsStartComponent } from './raids-start.component';

describe('RaidsStartComponent', () => {
  let component: RaidsStartComponent;
  let fixture: ComponentFixture<RaidsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidsStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
