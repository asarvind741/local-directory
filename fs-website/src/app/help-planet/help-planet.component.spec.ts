import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPlanetComponent } from './help-planet.component';

describe('HelpPlanetComponent', () => {
  let component: HelpPlanetComponent;
  let fixture: ComponentFixture<HelpPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpPlanetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
