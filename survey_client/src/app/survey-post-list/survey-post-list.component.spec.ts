import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPostListComponent } from './survey-post-list.component';

describe('SurveyPostListComponent', () => {
  let component: SurveyPostListComponent;
  let fixture: ComponentFixture<SurveyPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
