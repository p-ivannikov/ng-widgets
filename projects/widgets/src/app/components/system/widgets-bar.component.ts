import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TuiStringHandler } from '@taiga-ui/cdk';
import { ExtendedFormGroup } from '../../core/models';

type WidgetForm = ExtendedFormGroup<WidgetsFormFields>;
type ChartType = 'LINEAR';
type DataSource = 'TEMPERATURE' | 'PRESSURE' | 'DATE';

interface WidgetsFormFields {
  readonly chartTypes: ChartTypeItem;
  readonly axisX: string;
  readonly axisY: string;
}

interface AxisItem {
  readonly title: string;
  readonly value: DataSource
}

class ChartTypeItem {
  type: ChartType;

  constructor(type: ChartType) {
    this.type = type;
  }

  toString(): string {
    return `${this.type} chart`;
  }
}

@Component({
  selector: 'wg-widgets-bar, [wg-widgets-bar]',
  templateUrl: './widgets-bar.component.html',
  styleUrls: ['./widgets-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetsBarComponent implements OnInit {

  @HostBinding('class.widgets-bar')
  readonly baseCss: boolean = true;

  readonly stringifyAxis: TuiStringHandler<AxisItem> =
    (item: AxisItem) => item.title;

  readonly charts: ReadonlyArray<ChartTypeItem>;
  readonly axisSource: ReadonlyArray<AxisItem>;
  readonly widgetsForm: WidgetForm;

  get chartTypeControl(): AbstractControl {
    return this.widgetsForm.get('chartType');
  }

  get axisXControl(): AbstractControl {
    return this.widgetsForm.get('axisX');
  }

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.charts = [
      new ChartTypeItem('LINEAR')
    ];

    this.axisSource = [
      {
        title: 'Date',
        value: 'DATE'
      },
      {
        title: 'Temperature',
        value: 'TEMPERATURE'
      },
      {
        title: 'Pressure',
        value: 'PRESSURE'
      }
    ];

    this.widgetsForm = this.fb.group({
      chartType: this.fb.control(null, [Validators.required]),
      axisX: this.fb.control(null, [Validators.required]),
      axisY: this.fb.control(null, [Validators.required])
    });
  }

  ngOnInit(): void {

  }

}
