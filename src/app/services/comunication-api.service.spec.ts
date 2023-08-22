import { TestBed } from '@angular/core/testing';

import { ComunicationAPIService } from './comunication-api.service';

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
