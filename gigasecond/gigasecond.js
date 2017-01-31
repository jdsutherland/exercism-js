const MILLI_TO_GIGA = 12;

class Gigasecond {
  constructor(initialDate) {
    this.initialDate = initialDate;
  }

  date() {
    const millisecondsInitialPlusGiga = this.initialDate.getTime() + Math.pow(10, MILLI_TO_GIGA);
    return new Date(millisecondsInitialPlusGiga);
  }
}

module.exports = Gigasecond;
