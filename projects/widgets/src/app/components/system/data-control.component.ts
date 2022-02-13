import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TuiDay, TuiDayRange } from '@taiga-ui/cdk';
import { TimeBorder } from '../core';

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
    min: new TuiDay(2021, 0, 1),
    max: TuiDay.currentLocal()
  };

  readonly dataControlForm;
  constructor(
    private readonly fb: FormBuilder
  ) {
    this.dataControlForm = this.fb.group({
      timePeriod: this.fb.control(null)
    });
  }

  ngOnInit(): void {
  }

}
