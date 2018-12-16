import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraintreePaymentComponent } from './braintree-payment.component';

describe('BraintreePaymentComponent', () => {
  let component: BraintreePaymentComponent;
  let fixture: ComponentFixture<BraintreePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraintreePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraintreePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
