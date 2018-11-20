import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFeatureComponent } from './stock-feature.component';

describe('StockFeatureComponent', () => {
  let component: StockFeatureComponent;
  let fixture: ComponentFixture<StockFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
