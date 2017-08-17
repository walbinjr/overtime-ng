import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import * as moment from 'moment';

/** A hero's name can't match the given regular expression */
export function wrongTimeValidator(inputValue: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const wrong = !moment(control.value, inputValue, true).isValid();
    return wrong ? {'appTimeValidator': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appTimeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: TimeValidatorDirective, multi: true}]
})
export class TimeValidatorDirective implements Validator {
  @Input() appTimeValidator: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.appTimeValidator ? wrongTimeValidator(this.appTimeValidator)(control) : null;
  }
}
