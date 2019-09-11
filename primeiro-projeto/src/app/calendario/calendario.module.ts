import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MatDatepickerModule,
    MatInputModule,
  ]
})
export class CalendarioModule { }
