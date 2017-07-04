import { TestBed, inject } from '@angular/core/testing';

import { SurveyPostService } from './survey-post.service';

describe('SurveyPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyPostService]
    });
  });

  it('should be created', inject([SurveyPostService], (service: SurveyPostService) => {
    expect(service).toBeTruthy();
  }));
});
