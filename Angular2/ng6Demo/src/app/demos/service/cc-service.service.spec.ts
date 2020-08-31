import { TestBed } from '@angular/core/testing';

import { CcServiceService } from './cc-service.service';

describe('CcServiceService', () => {
  let service: CcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
