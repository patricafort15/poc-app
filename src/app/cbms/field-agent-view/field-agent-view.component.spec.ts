import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAgentViewComponent } from './field-agent-view.component';

describe('FieldAgentViewComponent', () => {
  let component: FieldAgentViewComponent;
  let fixture: ComponentFixture<FieldAgentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldAgentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAgentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
