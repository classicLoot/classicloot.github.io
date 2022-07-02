import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterClassComponent } from './filter-class.component';

describe('FilterClassComponent', () => {
  let component: FilterClassComponent;
  let fixture: ComponentFixture<FilterClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
