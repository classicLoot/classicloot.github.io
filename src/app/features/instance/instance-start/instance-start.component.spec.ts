import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceStartComponent } from './instance-start.component';

describe('InstanceStartComponent', () => {
  let component: InstanceStartComponent;
  let fixture: ComponentFixture<InstanceStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstanceStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
