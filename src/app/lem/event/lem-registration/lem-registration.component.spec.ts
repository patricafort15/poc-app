import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LemRegistrationComponent } from './lem-registration.component';

describe('LemRegistrationComponent', () => {
  let component: LemRegistrationComponent;
  let fixture: ComponentFixture<LemRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LemRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LemRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
