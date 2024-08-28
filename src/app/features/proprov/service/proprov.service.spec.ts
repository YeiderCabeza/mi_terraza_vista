import { TestBed } from '@angular/core/testing';

import { ProprovService } from './proprov.service';

describe('ProprovService', () => {
  let service: ProprovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProprovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
