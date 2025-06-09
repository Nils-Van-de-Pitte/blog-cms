import {expect, test} from'vitest';
const { decrypt, encrypt } = require('../../core/utilities/crypto');

test('Should match the original password', async () => {
  const originalPassword = 'Test123?';
  const hashedPassword = await encrypt(originalPassword);
  const isMatch = await decrypt(originalPassword, hashedPassword);

  expect(isMatch).toBe(true);
});