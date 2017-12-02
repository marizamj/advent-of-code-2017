const fs = require('fs');

const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();

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

const answer_1 = findChecksum(input, 1);
const answer_2 = findChecksum(input, 2);

console.log('Day 2, answer 1:', answer_1);
console.log('Day 2, answer 2:', answer_2);

module.exports = findChecksum;
