import operate from '../logic/operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    expect(operate('10', '5', '+')).toBe('15');
    expect(operate('0', '0', '+')).toBe('0');
    expect(operate('-10', '5', '+')).toBe('-5');
  });

  it('should perform subtraction correctly', () => {
    expect(operate('10', '5', '-')).toBe('5');
    expect(operate('0', '0', '-')).toBe('0');
    expect(operate('-10', '5', '-')).toBe('-15');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('10', '5', 'x')).toBe('50');
    expect(operate('0', '5', 'x')).toBe('0');
    expect(operate('-10', '-5', 'x')).toBe('50');
  });

  it('should perform division correctly', () => {
    expect(operate('10', '5', '÷')).toBe('2');
    expect(operate('0', '5', '÷')).toBe('0');
    expect(operate('10', '2', '÷')).toBe('5');
  });

  it('should handle division by zero', () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
    expect(operate('0', '0', '÷')).toBe("Can't divide by 0.");
    expect(operate('-10', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should perform modulo correctly', () => {
    expect(operate('10', '3', '%')).toBe('1');
    expect(operate('10', '10', '%')).toBe('0');
    expect(operate('7', '2', '%')).toBe('1');
  });

  it('should handle modulo with division by zero', () => {
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
    expect(operate('0', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
    expect(operate('-10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('10', '5', '^')).toThrow("Unknown operation '^'");
  });
});
