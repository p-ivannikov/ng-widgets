import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataControlComponent } from './data-control.component';
import { SafeAny } from '../core';

const EXPORTS: SafeAny[] = [DataControlComponent];

@NgModule({
  declarations: [
    ...EXPORTS
  ],
  exports: EXPORTS,
  imports: [
    CommonModule
  ]
})
export class SystemModule { }
