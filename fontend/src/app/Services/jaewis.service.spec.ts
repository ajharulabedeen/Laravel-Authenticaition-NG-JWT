import { TestBed } from '@angular/core/testing';

import { JaewisService } from './jaewis.service';

describe('JaewisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JaewisService = TestBed.get(JaewisService);
    expect(service).toBeTruthy();
  });
});
