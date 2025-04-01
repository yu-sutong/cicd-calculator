import { expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './calculator';

test('add 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract 1 + 2 to equal -1', () => {
  expect(subtract(1, 2)).toBe(-1);
});

test('divide 1 / 2 to equal 0.5', () => {
  expect(divide(1, 2)).toBe(0.5);
});

test('multiply 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});
