import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonsStartComponent } from './dungeons-start.component';

describe('DungeonsStartComponent', () => {
  let component: DungeonsStartComponent;
  let fixture: ComponentFixture<DungeonsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonsStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
