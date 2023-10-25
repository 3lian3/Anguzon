import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabsDescriptionComponent } from './product-tabs-description.component';

describe('ProductTabsDescriptionComponent', () => {
  let component: ProductTabsDescriptionComponent;
  let fixture: ComponentFixture<ProductTabsDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTabsDescriptionComponent]
    });
    fixture = TestBed.createComponent(ProductTabsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
