import { TestBed } from '@angular/core/testing';

import { PuntoGeograficoService } from './punto-geografico.service';

describe('PuntoGeograficoService', () => {
  let service: PuntoGeograficoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoGeograficoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
