import { TestBed, inject } from '@angular/core/testing';

import { LastNameService } from './last-name.service';

describe('LastNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastNameService]
    });
  });

  it('should be created', inject([LastNameService], (service: LastNameService) => {
    expect(service).toBeTruthy();
  }));
});
