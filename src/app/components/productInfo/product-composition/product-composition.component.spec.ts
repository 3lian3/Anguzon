import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCompositionComponent } from './product-composition.component';

describe('ProductCompositionComponent', () => {
  let component: ProductCompositionComponent;
  let fixture: ComponentFixture<ProductCompositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCompositionComponent]
    });
    fixture = TestBed.createComponent(ProductCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
