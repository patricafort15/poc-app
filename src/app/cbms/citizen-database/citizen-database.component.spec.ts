import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenDatabaseComponent } from './citizen-database.component';

describe('CitizenDatabaseComponent', () => {
  let component: CitizenDatabaseComponent;
  let fixture: ComponentFixture<CitizenDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
