class Isogram {
  constructor(word) {
    this.word = this.sanitize(word);
  }

  isIsogram() {
    const reRepeating = /([^\s]).*\1/ig;
    return !reRepeating.test(this.word);
  }

  sanitize(word) {
    return word.toLowerCase().replace(/[^\wé]/g, '').trim();
  }
}

module.exports = Isogram;
