import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpYrselfComponentComponent } from './help-yrself-component.component';

describe('HelpYrselfComponentComponent', () => {
  let component: HelpYrselfComponentComponent;
  let fixture: ComponentFixture<HelpYrselfComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpYrselfComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpYrselfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
