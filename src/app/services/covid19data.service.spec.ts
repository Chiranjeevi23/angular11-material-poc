import { TestBed } from '@angular/core/testing';

import { Covid19dataService } from './covid19data.service';

describe('Covid19dataService', () => {
  let service: Covid19dataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19dataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
