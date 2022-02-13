import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'wg-data-control, [wg-data-control]',
  templateUrl: './data-control.component.html',
  styleUrls: ['./data-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
