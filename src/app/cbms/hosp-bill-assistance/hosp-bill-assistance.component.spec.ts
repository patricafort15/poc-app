import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospBillAssistanceComponent } from './hosp-bill-assistance.component';

describe('HospBillAssistanceComponent', () => {
  let component: HospBillAssistanceComponent;
  let fixture: ComponentFixture<HospBillAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospBillAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospBillAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
