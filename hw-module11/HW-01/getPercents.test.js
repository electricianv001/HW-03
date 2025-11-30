const getPercents = require('./getPercents');

describe('Тесты для функции getPercents', () => {
  // Тест 1
  test('30% от 200 должно быть 60', () => {
    expect(getPercents(30, 200)).toBe(60);
  });

  // Тест 2
  test('0% от любого числа должно быть 0', () => {
    expect(getPercents(0, 200)).toBe(0);
  });

  // Тест 3
  test('Процент от 0 должен быть 0', () => {
    expect(getPercents(30, 0)).toBe(0);
  });
});