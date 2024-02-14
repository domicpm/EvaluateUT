// code.js
class BinaryToDecimal {
  static binaryToDecimal(binNum) {
    let binCopy = binNum;
    let decimal = 0;
    let power = 0;

    while (binCopy !== 0) {
      const digit = binCopy % 10;
      decimal += digit * 2 ** power++;
      binCopy = Math.floor(binCopy / 10);
    }

    return decimal;
  }

  static addTwoNumbers(a, b) {
    return a + b;
  }
}

module.exports = BinaryToDecimal;
