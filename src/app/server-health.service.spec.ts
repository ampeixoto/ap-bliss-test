import { TestBed, inject } from '@angular/core/testing';

import { ServerHealthService } from './server-health.service';

describe('ServerHealthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerHealthService]
    });
  });

  it('should be created', inject([ServerHealthService], (service: ServerHealthService) => {
    expect(service).toBeTruthy();
  }));
});
