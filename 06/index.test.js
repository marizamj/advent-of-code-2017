const countCycles = require('./index.js');

test('parts 1 & 2', () => {
  expect(countCycles([0, 2, 7, 0])).toEqual({ cycles: 5, loopLength: 4 });
});
