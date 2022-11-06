export class ArcDataUtils {
  static isDateBetween({ date, start, end = new Date() }: { date: Date; start: Date; end: Date }): boolean {
    return date > start && date < end;
  }
}
