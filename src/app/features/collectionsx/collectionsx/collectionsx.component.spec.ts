import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsxComponent } from './collectionsx.component';

describe('CollectionsxComponent', () => {
  let component: CollectionsxComponent;
  let fixture: ComponentFixture<CollectionsxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
