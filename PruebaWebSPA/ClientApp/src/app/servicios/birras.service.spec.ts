import { TestBed } from '@angular/core/testing';

import { BirrasService } from './birras.service';

describe('BirrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BirrasService = TestBed.get(BirrasService);
    expect(service).toBeTruthy();
  });
});
