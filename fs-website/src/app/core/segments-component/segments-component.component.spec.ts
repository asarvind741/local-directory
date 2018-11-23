import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsComponentComponent } from './segments-component.component';

describe('SegmentsComponentComponent', () => {
  let component: SegmentsComponentComponent;
  let fixture: ComponentFixture<SegmentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
