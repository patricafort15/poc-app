import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EphDashboardComponent } from './eph-dashboard.component';

describe('EphDashboardComponent', () => {
  let component: EphDashboardComponent;
  let fixture: ComponentFixture<EphDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EphDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EphDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
