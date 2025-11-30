// sum.test.js
const sum = require('./sum');

describe('sum', () => {
  test('складывает два положительных числа', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('работает с отрицательными и положительными числами', () => {
    expect(sum(-2, 3)).toBe(1);
  });

  test('складывает нули', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('выбрасывает ошибку, если переданы не числа', () => {
    expect(() => sum('2', 3)).toThrow('Both arguments must be numbers');
  });
});
