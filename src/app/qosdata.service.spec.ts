import { TestBed, inject } from '@angular/core/testing';

import { QosdataService } from './qosdata.service';

describe('QosdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QosdataService]
    });
  });

  it('should be created', inject([QosdataService], (service: QosdataService) => {
    expect(service).toBeTruthy();
  }));
});
