import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCycleComponent } from './product-cycle.component';

describe('ProductCycleComponent', () => {
  let component: ProductCycleComponent;
  let fixture: ComponentFixture<ProductCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
