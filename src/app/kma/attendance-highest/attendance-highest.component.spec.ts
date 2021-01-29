import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceHighestComponent } from './attendance-highest.component';

describe('AttendanceHighestComponent', () => {
  let component: AttendanceHighestComponent;
  let fixture: ComponentFixture<AttendanceHighestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceHighestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceHighestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
