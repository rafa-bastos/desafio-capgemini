import calculatePairs from './question_2';

describe('Question 2', () => {
  it('calculates number of pairs in an array that difference equals a given x', () => {
    const arr = [1, 5, 3, 4, 2];
    const x = 2;
    const result = calculatePairs(arr, x);
    expect(result).toBe(3);
  });
});
