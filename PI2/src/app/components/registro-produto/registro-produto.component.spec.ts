import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProdutoComponent } from './registro-produto.component';

describe('RegistroProdutoComponent', () => {
  let component: RegistroProdutoComponent;
  let fixture: ComponentFixture<RegistroProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroProdutoComponent]
    });
    fixture = TestBed.createComponent(RegistroProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
