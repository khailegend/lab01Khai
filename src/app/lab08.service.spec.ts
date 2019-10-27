import { TestBed } from '@angular/core/testing';

import { Lab08Service } from './lab08.service';

describe('Lab08Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Lab08Service = TestBed.get(Lab08Service);
    expect(service).toBeTruthy();
  });
});
