import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCode, CountryCodes } from './country-code.interface';
import { CountryCodeService } from './country-code.service';

export * from './country-code.interface';
export * from './country-code.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ],
  exports: [ ]
})
export class CountryCodeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CountryCodeModule,
      providers: [
        CountryCodeService
      ]
    };
  }
}
