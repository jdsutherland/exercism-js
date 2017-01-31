class Isogram {
  constructor(word) {
    this.word = this.sanitize(word);
  }

  isIsogram() {
    let letters = [];

    return this.word.split('').every((letter) => {
      let result = !letters.includes(letter);
      letters.push(letter);
      return result;
    });
  }

  sanitize(word) {
    return word.toLowerCase().replace(/[^\wé]/g, '').trim();
  }
}

module.exports = Isogram;
