import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {
  constructor(private _formBuilder: FormBuilder) {}
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0
  });
}
