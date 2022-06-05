import { TestBed } from '@angular/core/testing';

import { RaiddataService } from './raiddata.service';

describe('RaiddataService', () => {
  let service: RaiddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaiddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
