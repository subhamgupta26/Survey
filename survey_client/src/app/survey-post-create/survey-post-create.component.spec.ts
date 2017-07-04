import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPostCreateComponent } from './survey-post-create.component';

describe('SurveyPostCreateComponent', () => {
  let component: SurveyPostCreateComponent;
  let fixture: ComponentFixture<SurveyPostCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPostCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
