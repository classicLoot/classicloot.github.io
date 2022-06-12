import { TestBed } from '@angular/core/testing';

import { InstancedataService } from './instancedata.service';

describe('InstancedataService', () => {
  let service: InstancedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstancedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
