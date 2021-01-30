import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterMgmtDashboardComponent } from './voter-mgmt-dashboard.component';

describe('VoterMgmtDashboardComponent', () => {
  let component: VoterMgmtDashboardComponent;
  let fixture: ComponentFixture<VoterMgmtDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterMgmtDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterMgmtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
