import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { DatepickerPopupComponent } from './components/datepicker-popup/datepicker-popup.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { AsFormGroupPipe } from './pipes/as-form-group.pipe';
@NgModule({
  declarations: [DatepickerPopupComponent, ToolbarComponent, TableWrapperComponent, AsFormGroupPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //Material stuff
    MaterialModule
  ],
  exports: [DatepickerPopupComponent, ToolbarComponent, TableWrapperComponent, ReactiveFormsModule, AsFormGroupPipe]
})
export class SharedModule {}
