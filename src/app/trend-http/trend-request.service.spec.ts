import { TestBed, inject } from '@angular/core/testing';

import { TrendRequestService } from './trend-request.service';

describe('TrendRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrendRequestService]
    });
  });

  it('should be created', inject([TrendRequestService], (service: TrendRequestService) => {
    expect(service).toBeTruthy();
  }));
});
