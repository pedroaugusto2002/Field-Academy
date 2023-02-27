import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { ListChampionService } from './list-champion.service';

describe('ListChampionService', () => {
  let service: ListChampionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListChampionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
