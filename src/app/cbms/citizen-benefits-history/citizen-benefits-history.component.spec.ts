import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenBenefitsHistoryComponent } from './citizen-benefits-history.component';

describe('CitizenBenefitsHistoryComponent', () => {
  let component: CitizenBenefitsHistoryComponent;
  let fixture: ComponentFixture<CitizenBenefitsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenBenefitsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenBenefitsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
