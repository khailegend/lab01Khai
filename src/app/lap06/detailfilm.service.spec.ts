import { TestBed } from '@angular/core/testing';

import { DetailfilmService } from './detailfilm.service';

describe('DetailfilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailfilmService = TestBed.get(DetailfilmService);
    expect(service).toBeTruthy();
  });
});
