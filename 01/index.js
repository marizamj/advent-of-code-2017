const fs = require('fs');

const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim();

//for part 1
const test1 = '1122'; // 3
const test2 = '1111'; // 4
const test3 = '1234'; // 0
const test4 = '91212129'; // 9
// for part 2
const test5 = '1212'; // 6
const test6 = '1221'; // 0
const test7 = '123425'; // 4
const test8 = '123123'; // 12
const test9 = '12131415'; // 4

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

const answer = captcha(input, 2);

console.log(answer);
