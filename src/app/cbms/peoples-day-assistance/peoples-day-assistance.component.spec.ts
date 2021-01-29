import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesDayAssistanceComponent } from './peoples-day-assistance.component';

describe('PeoplesDayAssistanceComponent', () => {
  let component: PeoplesDayAssistanceComponent;
  let fixture: ComponentFixture<PeoplesDayAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesDayAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesDayAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
