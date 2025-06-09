const bcrypt = require('bcrypt');

/**
 * Encrypts the provided secret using a predefined encryption algorithm.
 *
 * @param {string} secret - The plain text string that needs to be encrypted.
 * @returns {string} The encrypted string.
 */
export function encrypt(secret) {
  return bcrypt.hash(secret, process.env.SALT_ROUNDS);
}

/**
 * Decrypts and compares the given item with its hashed counterpart to check for a match.
 *
 * @param {string} toBeDecryptedItem - The plain text item to be compared.
 * @param {string} hashedItem - The hashed string to compare the plain text against.
 * @return {Promise<boolean>} A promise that resolves to a boolean value indicating whether the items match.
 */
export function decrypt(toBeDecryptedItem, hashedItem) {
  return bcrypt.compare(toBeDecryptedItem, hashedItem);
}