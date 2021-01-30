import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MktgCampaignComponent } from './mktg-campaign.component';

describe('MktgCampaignComponent', () => {
  let component: MktgCampaignComponent;
  let fixture: ComponentFixture<MktgCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MktgCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MktgCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
