import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbmsDashboardComponent } from './cbms-dashboard.component';

describe('CbmsDashboardComponent', () => {
  let component: CbmsDashboardComponent;
  let fixture: ComponentFixture<CbmsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbmsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
