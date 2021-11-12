import { TestBed } from '@angular/core/testing';

import { HbluxObservableService } from './hblux-observable.service';

describe('HbluxObservableService', () => {
  let service: HbluxObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HbluxObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
