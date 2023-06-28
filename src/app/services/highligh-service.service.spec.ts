import { TestBed } from '@angular/core/testing';

import { HighlighServiceService } from './highligh-service.service';

describe('HighlighServiceService', () => {
  let service: HighlighServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlighServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
