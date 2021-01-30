import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSampleComponent } from './letter-sample.component';

describe('LetterSampleComponent', () => {
  let component: LetterSampleComponent;
  let fixture: ComponentFixture<LetterSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
