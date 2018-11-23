import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerFeatureComponent } from './buyer-feature.component';

describe('BuyerFeatureComponent', () => {
  let component: BuyerFeatureComponent;
  let fixture: ComponentFixture<BuyerFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
