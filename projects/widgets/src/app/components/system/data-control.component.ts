import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TuiDay, TuiDayRange } from '@taiga-ui/cdk';
import { ExtendedFormGroup, InputDate } from '../../core/models';
import { StoreService } from '../../core/services/store.service';
import { TimeBorder } from '../core';

interface InputTimePeriod {
  from: InputDate;
  to: InputDate;
}
interface DataControlFields {
  timePeriod: InputTimePeriod | null;
}

type DataControlForm = ExtendedFormGroup<DataControlFields>;

@Component({
  selector: 'wg-data-control, [wg-data-control]',
  templateUrl: './data-control.component.html',
  styleUrls: ['./data-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataControlComponent implements OnInit {

  @HostBinding('class.data-control')
  readonly baseCss: boolean = true;

  readonly TIME_BORDERS: Partial<TimeBorder> = {
    min: TuiDay.currentLocal(),
    max: TuiDay.currentLocal().append({ day: 7 })
  };

  readonly dataControlForm: DataControlForm;

  get timePeriodControl(): AbstractControl {
    return this.dataControlForm.get('timePeriod');
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: StoreService
  ) {
    this.dataControlForm = this.fb.group({
      timePeriod: this.fb.control(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  loadData(): void {
    const { timePeriod }: DataControlFields = this.dataControlForm.value;
    let days: number;

    if (!!timePeriod) {
      const { from, to }: InputTimePeriod = timePeriod;
      days = to.day - from.day + 1;
    }

    this.store.loadForecast(days);
  }

}
