import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArcDataComponent } from './components/arc-data/arc-data.component';



@NgModule({
  declarations: [
    ArcDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArcDataComponent
  ]
})
export class ArcModule { }
