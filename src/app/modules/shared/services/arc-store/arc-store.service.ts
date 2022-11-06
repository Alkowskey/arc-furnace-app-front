import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArcStoreService {
  private readonly _dateRange = new BehaviorSubject<{ start: Date; end: Date }>({ start: new Date(), end: new Date() });
  readonly dateRange$ = this._dateRange.asObservable();

  get dateRange(): { start: Date; end: Date } {
    return this._dateRange.getValue();
  }

  private set dateRange(val: { start: Date; end: Date }) {
    this._dateRange.next(val);
  }

  updateRange({ start, end }: { start: Date; end: Date }) {
    this.dateRange = { start, end };
  }
}
