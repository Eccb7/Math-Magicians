import calculate from '../logic/calculate';

describe('test cases for symbols', () => {
  test('should reset the object and return all attributes as null for AC', () => {
    const data = {
      total: 10,
      next: 5,
      operation: '+',
    };

    expect(calculate(data, 'AC')).toEqual({ total: null, next: null, operation: null });
  });
});

describe('test cases for numbers', () => {
  test('should return empty object if next is 0 and button name is 0', () => {
    const data = {
      total: '0',
      next: '0',
      operation: '+',
    };
    expect(calculate(data, '0')).toEqual({});
  });
});
