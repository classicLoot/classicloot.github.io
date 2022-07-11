import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingStartComponent } from './crafting-start.component';

describe('CraftingStartComponent', () => {
  let component: CraftingStartComponent;
  let fixture: ComponentFixture<CraftingStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftingStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftingStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
