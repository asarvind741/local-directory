import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSubscriptionComponentComponent } from './supplier-subscription-component.component';

describe('SupplierSubscriptionComponentComponent', () => {
  let component: SupplierSubscriptionComponentComponent;
  let fixture: ComponentFixture<SupplierSubscriptionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierSubscriptionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierSubscriptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
