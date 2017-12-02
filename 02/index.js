const fs = require('fs');

const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim();

const test1 = `
5 1 9 5
7 5 3
2 4 6 8
`.trim();

const test2 = `
5 9 2 8
9 4 7 3
3 8 6 5
`.trim();

const splitRow = row => row.split(/\s+/).map(el => Number(el));

const findDiff = row => {
  const result = splitRow(row).reduce(
    (acc, n) => {
      acc.max = Math.max(n, acc.max);
      acc.min = Math.min(n, acc.min);
      return acc;
    },
    { max: 0, min: Infinity }
  );

  return result.max - result.min;
};

const findDivisionResult = row =>
  splitRow(row).reduce(
    (acc, n, _, arr) => arr.find(m => m !== n && m % n === 0) / n || acc,
    0
  );

const findChecksum = (spreadshit, part) =>
  spreadshit
    .split('\n')
    .reduce(
      (acc, row) =>
        (acc += part === 1 ? findDiff(row) : findDivisionResult(row)),
      0
    );

const answer = findChecksum(input, 2);

console.log(answer);
