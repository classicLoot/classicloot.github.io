import { TestBed } from '@angular/core/testing';

import { CollectionsdataService } from './collectionsdata.service';

describe('CollectionsdataService', () => {
  let service: CollectionsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
