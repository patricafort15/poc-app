import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTrackerComponent } from './donation-tracker.component';

describe('DonationTrackerComponent', () => {
  let component: DonationTrackerComponent;
  let fixture: ComponentFixture<DonationTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
