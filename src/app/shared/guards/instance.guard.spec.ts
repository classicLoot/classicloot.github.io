import { TestBed } from '@angular/core/testing';

import { InstanceGuard } from './instance.guard';

describe('InstanceGuard', () => {
  let guard: InstanceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InstanceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
