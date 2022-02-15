import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataControlComponent } from './data-control.component';
import { SafeAny } from '../core';
import { TuiInputDateRangeModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

const EXPORTS: SafeAny[] = [DataControlComponent];

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
    TuiButtonModule
  ]
})
export class SystemModule { }
