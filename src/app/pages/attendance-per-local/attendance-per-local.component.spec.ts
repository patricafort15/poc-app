import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancePerLocalComponent } from './attendance-per-local.component';

describe('AttendancePerLocalComponent', () => {
  let component: AttendancePerLocalComponent;
  let fixture: ComponentFixture<AttendancePerLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancePerLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancePerLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
