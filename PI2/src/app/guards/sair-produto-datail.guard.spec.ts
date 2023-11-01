import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { sairProdutoDatailGuard } from './sair-produto-datail.guard';

describe('sairProdutoDatailGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sairProdutoDatailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
