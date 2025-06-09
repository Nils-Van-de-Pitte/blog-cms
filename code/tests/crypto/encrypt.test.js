import {expect, test} from 'vitest';
const {encrypt} = require('../../core/utilities/crypto');

test('Should be different than the original', () => {
  const password = 'Test123?';
  const encrypted = encrypt(password);
  expect(encrypted).not.toBe(password);
});

test('Should not be undefined', () => {
  const password = 'Test123?';
  const encrypted = encrypt(password);
  expect(encrypted).not.toBe(password);
  expect(encrypt('Test123?')).not.toBeUndefined();
});