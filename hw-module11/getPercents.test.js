// getPercents.test.js
const getPercents = require('./getPercents');

describe('getPercents', () => {
  test('возвращает 60 для 30% от 200', () => {
    expect(getPercents(30, 200)).toBe(60);
  });

  test('возвращает 0 для 0% от любого числа', () => {
    expect(getPercents(0, 500)).toBe(0);
  });

  test('возвращает 350 для 100% от 350', () => {
    expect(getPercents(100, 350)).toBe(350);
  });

  test('выбрасывает ошибку, если аргументы не числа', () => {
    expect(() => getPercents('30', 200)).toThrow('Both arguments must be numbers');
    expect(() => getPercents(30, '200')).toThrow('Both arguments must be numbers');
  });
});
