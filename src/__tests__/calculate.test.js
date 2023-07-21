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
