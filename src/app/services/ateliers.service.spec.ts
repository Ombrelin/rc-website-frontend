import { TestBed } from '@angular/core/testing';

import { AteliersService } from './ateliers.service';

describe('AteliersService', () => {
  let service: AteliersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AteliersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
