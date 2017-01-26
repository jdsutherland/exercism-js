function Year(year) {
  this.year = year;
}

Year.prototype.isLeap = function() {
  return isEvenlyDivisible(this.year, 4) ||
    !isEvenlyDivisible(this.year, 100) &&
    isEvenlyDivisible(this.year, 400)
}

function isEvenlyDivisible(dividend, divisor) {
  return dividend % divisor == 0;
}

module.exports = Year;
