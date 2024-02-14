// unit_test/simple.test.js
const BinaryToDecimal = require('../functions/code');

describe('BinaryToDecimal', () => {
  describe('addTwoNumbers', () => {
    it('should add two numbers', () => {
      const result = BinaryToDecimal.addTwoNumbers(2, 3);
      expect(result).toBe(5);
    });
  });
});
