import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPostDetailsComponent } from './survey-post-details.component';

describe('SurveyPostDetailsComponent', () => {
  let component: SurveyPostDetailsComponent;
  let fixture: ComponentFixture<SurveyPostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
