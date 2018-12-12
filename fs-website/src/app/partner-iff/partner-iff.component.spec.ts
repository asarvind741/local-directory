import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerIffComponent } from './partner-iff.component';

describe('HelpPlanetComponent', () => {
  let component: PartnerIffComponent;
  let fixture: ComponentFixture<PartnerIffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerIffComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerIffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
