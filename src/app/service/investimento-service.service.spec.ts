/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InvestimentoServiceService } from './investimento-service.service';

describe('Service: InvestimentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestimentoServiceService]
    });
  });

  it('should ...', inject([InvestimentoServiceService], (service: InvestimentoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
