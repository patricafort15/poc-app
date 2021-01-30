import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTrackerComponent } from './vendor-tracker.component';

describe('VendorTrackerComponent', () => {
  let component: VendorTrackerComponent;
  let fixture: ComponentFixture<VendorTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
