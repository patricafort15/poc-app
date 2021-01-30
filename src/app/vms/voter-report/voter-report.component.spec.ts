import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterReportComponent } from './voter-report.component';

describe('VoterReportComponent', () => {
  let component: VoterReportComponent;
  let fixture: ComponentFixture<VoterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
