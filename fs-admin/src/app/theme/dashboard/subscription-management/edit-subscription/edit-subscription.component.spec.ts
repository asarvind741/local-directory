import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubscriptionComponent } from './edit-subscription.component';

describe('EditUserComponent', () => {
  let component: EditSubscriptionComponent;
  let fixture: ComponentFixture<EditSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});