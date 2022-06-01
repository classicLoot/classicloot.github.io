import { TestBed } from '@angular/core/testing';

import { ItemdataService } from './itemdata.service';

describe('ItemdataService', () => {
  let service: ItemdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
