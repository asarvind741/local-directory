import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltPlatformComponent } from './built-platform.component';

describe('BuiltPlatformComponent', () => {
  let component: BuiltPlatformComponent;
  let fixture: ComponentFixture<BuiltPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
