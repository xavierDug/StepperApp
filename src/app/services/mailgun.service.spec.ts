/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MailgunService } from './mailgun.service';

describe('Service: Mailgun', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailgunService]
    });
  });

  it('should ...', inject([MailgunService], (service: MailgunService) => {
    expect(service).toBeTruthy();
  }));
});
