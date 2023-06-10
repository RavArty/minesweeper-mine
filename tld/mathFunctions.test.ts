import { add, mul } from './mathFuncitons';

describe('Math function test', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('Check multiply function', () => {
    expect(mul(3, 2)).toBe(6);
  });
});
