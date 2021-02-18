import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsAdminProfileComponent } from './vms-admin-profile.component';

describe('VmsAdminProfileComponent', () => {
  let component: VmsAdminProfileComponent;
  let fixture: ComponentFixture<VmsAdminProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmsAdminProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
