import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsStartCComponent } from './collections-start-c.component';

describe('CollectionsStartCComponent', () => {
  let component: CollectionsStartCComponent;
  let fixture: ComponentFixture<CollectionsStartCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsStartCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsStartCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
