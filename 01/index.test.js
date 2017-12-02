const captcha = require('./index');

test('part 1', () => {
  expect(captcha('1122', 1)).toBe(3);
  expect(captcha('1111', 1)).toBe(4);
  expect(captcha('1234', 1)).toBe(0);
  expect(captcha('91212129', 1)).toBe(9);
});

test('part 2', () => {
  expect(captcha('1212', 2)).toBe(6);
  expect(captcha('1221', 2)).toBe(0);
  expect(captcha('123425', 2)).toBe(4);
  expect(captcha('123123', 2)).toBe(12);
  expect(captcha('12131415', 2)).toBe(4);
});
