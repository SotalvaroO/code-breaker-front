import { TestBed } from '@angular/core/testing';

import { CodeBreakServiceService } from './code-break-service.service';

describe('CodeBreakServiceService', () => {
  let service: CodeBreakServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeBreakServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
