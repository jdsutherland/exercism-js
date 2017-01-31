const ENG_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

class Pangram {
  constructor(sentence) {
    this.sentence = this.sanitize(sentence);
  }

  isPangram() {
    return ENG_ALPHABET.every((letter) => this.sentence.includes(letter));
  }

  sanitize(string) {
    return string.toLowerCase().replace(/[^\w]/g, '').trim();
  }
}

module.exports = Pangram;
