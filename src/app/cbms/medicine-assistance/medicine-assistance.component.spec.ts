import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineAssistanceComponent } from './medicine-assistance.component';

describe('MedicineAssistanceComponent', () => {
  let component: MedicineAssistanceComponent;
  let fixture: ComponentFixture<MedicineAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
