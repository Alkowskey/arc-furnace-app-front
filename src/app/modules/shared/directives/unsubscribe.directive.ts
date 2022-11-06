import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class UnsubscribeDirective implements OnDestroy {
  protected destroyed = new Subject<void>();

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
