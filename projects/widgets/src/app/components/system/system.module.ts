import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataControlComponent } from './data-control.component';
import { SafeAny } from '../core';
import {
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiInputDateRangeModule,
  TuiSelectModule,
  TuiStringifyContentPipeModule
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiLabelModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { WidgetsBarComponent } from './widgets-bar.component';

const EXPORTS: SafeAny[] = [
  DataControlComponent,
  WidgetsBarComponent
];

@NgModule({
  declarations: [
    ...EXPORTS
  ],
  exports: EXPORTS,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiInputDateRangeModule,
    TuiButtonModule,
    TuiSelectModule,
    TuiComboBoxModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiStringifyContentPipeModule,
    TuiLabelModule
  ]
})
export class SystemModule { }
