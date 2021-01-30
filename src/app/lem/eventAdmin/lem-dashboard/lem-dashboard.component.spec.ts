import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LemDashboardComponent } from './lem-dashboard.component';

describe('LemDashboardComponent', () => {
  let component: LemDashboardComponent;
  let fixture: ComponentFixture<LemDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LemDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LemDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
