import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqFeaturesComponent } from './rfq-features.component';

describe('RfqFeaturesComponent', () => {
  let component: RfqFeaturesComponent;
  let fixture: ComponentFixture<RfqFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfqFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfqFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
