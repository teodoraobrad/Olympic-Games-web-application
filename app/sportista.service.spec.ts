import { TestBed } from '@angular/core/testing';

import { SportistaService } from './sportista.service';

describe('SportistaService', () => {
  let service: SportistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
