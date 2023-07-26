import { TestBed } from '@angular/core/testing';

import { RestutilsService } from './restutils.service';

describe('RestutilsService', () => {
  let service: RestutilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestutilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
