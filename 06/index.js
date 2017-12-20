const input = [4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3];

const redistribute = (index, _banks) => {
  const banks = _banks.concat();
  const blocks = banks[index];

  let leftover = blocks % banks.length;

  banks[index] = 0;

  for (let i = 1; i <= banks.length; i++) {
    const current = (i + index) % banks.length;
    banks[current] = banks[current] += Math.floor(blocks / banks.length);

    if (leftover > 0) {
      banks[current] += 1;
      leftover -= 1;
    }
  }

  return banks;
};

const findMaxIndex = combo => combo.indexOf(Math.max(...combo));

const countCycles = input => {
  const knownCombinations = {};
  let cycles = 0;

  let nextCombination = input;

  while (!knownCombinations[nextCombination.join()]) {
    knownCombinations[nextCombination.join()] = cycles;

    const index = findMaxIndex(nextCombination);
    nextCombination = redistribute(index, nextCombination);
    cycles++;
  }

  const loopLength = cycles - knownCombinations[nextCombination.join()];

  return { cycles, loopLength };
};

const result = countCycles(input);

const answer_1 = result.cycles;
const answer_2 = result.loopLength;

console.log('Day 5, answer 1:', answer_1);
console.log('Day 5, answer 2:', answer_2);

module.exports = countCycles;
