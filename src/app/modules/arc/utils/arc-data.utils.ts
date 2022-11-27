import { Point } from 'chart.js';

export class ArcDataUtils {
  static isDateBetween({ date, start, end = new Date() }: { date: Date; start: Date; end: Date }): boolean {
    return date > start && date < end;
  }

  static selectProperties(
    data: { [key: string]: any },
    chart: { [key: string]: boolean }
  ): { [key: string]: number | string } {
    return Object.keys(data).reduce((acc, curr) => (chart[curr] ? { ...acc, [curr]: data[curr] } : acc), {});
  }

  static selectUniquePoints(points: Point[]): Point[] {
    return [...new Set(points.map((item) => JSON.stringify(item)))].map((item) => JSON.parse(item));
  }
}
