import { TestBed } from '@angular/core/testing';

import { ModalStoreService } from './modal-store.service';

describe('ModalStoreService', () => {
  let service: ModalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
