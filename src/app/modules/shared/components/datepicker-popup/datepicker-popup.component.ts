import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';

import { ArcStoreService } from '../../services/arc-store/arc-store.service';
import { UnsubscribeDirective } from '../../directives/unsubscribe.directive';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.sass']
})
export class DatepickerPopupComponent extends UnsubscribeDirective implements OnInit {
  constructor(private store: ArcStoreService) {
    super();
  }
  rangeFormGroup = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16))
  });

  ngOnInit(): void {
    this.rangeFormGroup.valueChanges.pipe(takeUntil(this.destroyed)).subscribe(({ start, end }) => {
      if (start && end) this.store.updateRange({ start, end });
    });
  }
}
