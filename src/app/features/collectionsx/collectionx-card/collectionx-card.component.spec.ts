import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionxCardComponent } from './collectionx-card.component';

describe('CollectionxCardComponent', () => {
  let component: CollectionxCardComponent;
  let fixture: ComponentFixture<CollectionxCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionxCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
