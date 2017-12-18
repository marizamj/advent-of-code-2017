const fs = require('fs');

const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split(/\n/)
  .map(Number);

const countSteps = (input, part) => {
  let loc = 0;
  let steps = 0;

  while (loc >= 0 && loc < input.length) {
    const oldLoc = loc;
    const oldLocVal = input[loc];

    loc = loc + input[loc];

    input[oldLoc] =
      part === 2 && oldLocVal >= 3 ? oldLocVal - 1 : oldLocVal + 1;

    steps++;
  }

  return steps;
};

const answer_1 = countSteps(input.concat(), 1);
const answer_2 = countSteps(input.concat(), 2);

console.log('Day 5, answer 1:', answer_1);
console.log('Day 5, answer 2:', answer_2);

module.exports = countSteps;
