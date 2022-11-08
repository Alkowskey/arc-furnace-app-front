import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { DatepickerPopupComponent } from './components/datepicker-popup/datepicker-popup.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
@NgModule({
  declarations: [DatepickerPopupComponent, ToolbarComponent, TableWrapperComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //Material stuff
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule
  ],
  exports: [DatepickerPopupComponent, ToolbarComponent, TableWrapperComponent, ReactiveFormsModule]
})
export class SharedModule {}
