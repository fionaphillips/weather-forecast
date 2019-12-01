import 'SetupTests';

import getNextFiveDays from 'Utilities/next-five-days';

describe('getNextFiveDays utility func', () => {
  it('returns an array with the next 5 days', () => {
    expect(getNextFiveDays().length).toEqual(5);
  });
});
