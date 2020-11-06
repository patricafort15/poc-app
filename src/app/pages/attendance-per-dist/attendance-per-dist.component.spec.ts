import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancePerDistComponent } from './attendance-per-dist.component';

describe('AttendancePerDistComponent', () => {
  let component: AttendancePerDistComponent;
  let fixture: ComponentFixture<AttendancePerDistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancePerDistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancePerDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
