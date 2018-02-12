import { ComponentFixture,  TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { CountryCodeService } from './country-code.service';

describe('CountryCodeService', () => {

  let srvc:    CountryCodeService;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });

  });

  it('Should be true', () => {
    expect(true).toBe((new CountryCodeService()).getCountries().length === 1);
  });
});
