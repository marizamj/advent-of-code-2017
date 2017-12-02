const fs = require('fs');

const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();

const captcha = (input, part) =>
  input.split('').reduce((acc, el, i, arr) => {
    let pair;

    if (part === 1) {
      pair = arr[i + 1] || arr[0];
    }

    if (part === 2) {
      const mid = i + arr.length / 2;
      pair = arr[mid] || arr[mid - arr.length];
    }

    return el === pair ? (acc += Number(el)) : acc;
  }, 0);

const answer_1 = captcha(input, 1);
const answer_2 = captcha(input, 2);

console.log('Day 1, answer 1:', answer_1);
console.log('Day 1, answer 2:', answer_2);

module.exports = captcha;
