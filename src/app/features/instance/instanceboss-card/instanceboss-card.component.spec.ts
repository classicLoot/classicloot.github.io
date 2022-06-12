import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancebossCardComponent } from './instanceboss-card.component';

describe('InstancebossCardComponent', () => {
  let component: InstancebossCardComponent;
  let fixture: ComponentFixture<InstancebossCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstancebossCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstancebossCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
