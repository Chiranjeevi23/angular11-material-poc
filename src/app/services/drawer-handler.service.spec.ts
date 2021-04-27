import { TestBed } from '@angular/core/testing';

import { DrawerHandlerService } from './drawer-handler.service';

describe('DrawerHandlerService', () => {
  let service: DrawerHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawerHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
