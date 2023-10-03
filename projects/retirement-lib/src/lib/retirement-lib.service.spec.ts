import { TestBed } from '@angular/core/testing';

import { RetirementLibService } from './retirement-lib.service';

describe('RetirementLibService', () => {
  let service: RetirementLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetirementLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
