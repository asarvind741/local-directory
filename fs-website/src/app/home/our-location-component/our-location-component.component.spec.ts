import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLocationComponentComponent } from './our-location-component.component';

describe('OurLocationComponentComponent', () => {
  let component: OurLocationComponentComponent;
  let fixture: ComponentFixture<OurLocationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurLocationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurLocationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
