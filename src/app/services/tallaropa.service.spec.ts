import { TestBed } from '@angular/core/testing';

import { TallaropaService } from './tallaropa.service';

describe('TallaropaService', () => {
  let service: TallaropaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TallaropaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
