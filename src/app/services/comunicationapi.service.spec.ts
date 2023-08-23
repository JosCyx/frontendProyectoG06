import { TestBed } from '@angular/core/testing';

import { ComunicationAPIService } from './comunicationapi.service';

describe('ComunicationAPIService', () => {
  let service: ComunicationAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicationAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
