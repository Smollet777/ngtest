import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[EmailValidator][formControlName],[EmailValidator][formControl],[EmailValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true },
  ]
})
export class EmailValidatorDirective implements Validator {

  validate(c: AbstractControl): { [key: string]: any } {
    const EMAIL_REGEXP = '[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$';

    return c.value.match(EMAIL_REGEXP) ?
      null : {
        validateEmail: {
          valid: false
        }
      };
  }

}
