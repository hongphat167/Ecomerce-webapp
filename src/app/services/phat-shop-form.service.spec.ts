import { TestBed } from '@angular/core/testing';

import { PhatShopFormService } from './phat-shop-form.service';

describe('PhatShopFormService', () => {
  let service: PhatShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhatShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
