import { FormGroup } from '@angular/forms';

export interface ExtendedFormGroup<T> extends FormGroup {
  value: T;
}
