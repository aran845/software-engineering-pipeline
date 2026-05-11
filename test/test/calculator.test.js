import test from 'node:test';
import assert from 'node:assert/strict';

import { sum, subtract, multiply, divide } from '../src/calculator.js';

test('sum adds two numbers correctly', () => {
  assert.equal(sum(2, 3), 5);
});

test('subtract subtracts two numbers correctly', () => {
  assert.equal(subtract(5, 3), 2);
});

test('multiply multiplies two numbers correctly', () => {
  assert.equal(multiply(4, 3), 12);
});

test('divide divides two numbers correctly', () => {
  assert.equal(divide(10, 2), 5);
});

test('divide throws an error when dividing by zero', () => {
  assert.throws(() => divide(10, 0), {
    message: 'Division by zero is not allowed'
  });
});
