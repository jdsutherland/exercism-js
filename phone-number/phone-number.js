const PhoneNumber = module.exports = {
  number(digits) {
    return PhoneDigits.getNumber(this.sanitize(digits));
  },

  sanitize(digits) {
    return digits.replace(/[^\d]/g, '').trim();
  },
}

class PhoneDigits {
  constructor(digits) {
    this.digits = digits;
  }

  static getNumber(digits) {
    switch (digits.length) {
      case 11:
        return new ElevenDigitNumber(digits).number;
      case 10:
        return new TenDigitNumber(digits).number;
      default:
        return new InvalidDigitNumber(digits).number;
    }
  }

  validDigitLength(len) {
    return len == 10 || len == 11;
  }

  firstDigitIsOne() {
    return this.digits.charAt(0) === '1';
  }
}

class ElevenDigitNumber extends PhoneDigits {
  constructor(digits) {
    super(digits);
  }

  get number() {
    return (this.firstDigitIsOne()) ? this.digits.slice(1) : new InvalidDigitNumber(this.digits).number;
  }
}

class TenDigitNumber extends PhoneDigits {
  constructor(digits) {
    super(digits);
  }

  get number() {
    return this.digits;
  }
}

class InvalidDigitNumber extends PhoneDigits {
  constructor(digits) {
    super(digits);
  }

  get number() {
    return '0000000000';
  }
}

module.exports = PhoneNumber;
