import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsProfileComponent } from './vms-profile.component';

describe('VmsProfileComponent', () => {
  let component: VmsProfileComponent;
  let fixture: ComponentFixture<VmsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
