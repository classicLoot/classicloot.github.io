import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsStartComponent } from './collections-start.component';

describe('CollectionsStartComponent', () => {
  let component: CollectionsStartComponent;
  let fixture: ComponentFixture<CollectionsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
