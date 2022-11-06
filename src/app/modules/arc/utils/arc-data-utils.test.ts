import { ArcDataUtils } from './arc-data.utils';

describe('ArcDataUtils', () => {
  describe('isDateBetween', () => {
    it('should return true if date is between start and end', () => {
      const date = new Date('2019-01-01');
      const start = new Date('2018-01-01');
      const end = new Date('2020-01-01');
      expect(ArcDataUtils.isDateBetween({ date, start, end })).toBeTruthy();
    });

    it('should return false if date is not between start and end', () => {
      const date = new Date('2019-01-01');
      const start = new Date('2018-01-01');
      const end = new Date('2019-01-01');
      expect(ArcDataUtils.isDateBetween({ date, start, end })).toBeFalsy();
    });
  });
});
