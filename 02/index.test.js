const findChecksum = require('./index');

const input_1 = `
5 1 9 5
7 5 3
2 4 6 8
`.trim();

const input_2 = `
5 9 2 8
9 4 7 3
3 8 6 5
`.trim();

test('part 1', () => {
  expect(findChecksum(input_1, 1)).toBe(18);
});

test('part 2', () => {
  expect(findChecksum(input_2, 2)).toBe(9);
});
