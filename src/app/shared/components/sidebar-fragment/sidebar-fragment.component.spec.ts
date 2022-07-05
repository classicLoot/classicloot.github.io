import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFragmentComponent } from './sidebar-fragment.component';

describe('SidebarFragmentComponent', () => {
  let component: SidebarFragmentComponent;
  let fixture: ComponentFixture<SidebarFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFragmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
