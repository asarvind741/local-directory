import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostPlanComponent } from './job-post-plan.component';

describe('JobPostPlanComponent', () => {
  let component: JobPostPlanComponent;
  let fixture: ComponentFixture<JobPostPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
