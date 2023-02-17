import { TestBed } from '@angular/core/testing';

import { ChapionsService } from './chapions.service';

describe('ChapionsService', () => {
  let service: ChapionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChapionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
