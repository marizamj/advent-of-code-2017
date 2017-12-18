const countSteps = require('./index.js');

test('part 1', () => {
  expect(countSteps([0, 3, 0, 1, -3], 1)).toBe(5);
});

test('part 2', () => {
  expect(countSteps([0, 3, 0, 1, -3], 2)).toBe(10);
});
