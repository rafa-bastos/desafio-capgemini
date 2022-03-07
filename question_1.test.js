import calculateMediana from './question_1';

describe('Question 1', () => {
  it('calculates the mediana of a given array', () => {
    const arr = [9, 2, 1, 4, 6];
    const result = calculateMediana(arr);
    expect(result).toBe(4);
  });
});
