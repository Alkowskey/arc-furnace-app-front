import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'asFormGroup'
})
export class AsFormGroupPipe implements PipeTransform {

  transform(abstractControl: AbstractControl | undefined): FormGroup {
    if(abstractControl instanceof FormGroup) {
    return abstractControl as FormGroup;
  }
    return new FormGroup({});
  }

}
