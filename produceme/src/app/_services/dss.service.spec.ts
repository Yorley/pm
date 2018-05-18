import { TestBed, inject } from '@angular/core/testing';

import { DssService } from './dss.service';

describe('DssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DssService]
    });
  });

  it('should be created', inject([DssService], (service: DssService) => {
    expect(service).toBeTruthy();
  }));
});
