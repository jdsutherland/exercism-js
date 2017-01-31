class Isogram {
  constructor(word) {
    this.word = this.sanitize(word);
  }

  isIsogram() {
    let result = true;
    const letterCounts = this.letterCounts();

    Object.keys(letterCounts).forEach((count) => {
      if (letterCounts[count] !== 1) {
        result = false;
      }
    });

    return result;
  }

  letterCounts() {
    return this.word.split('').reduce((map, letter) => {
       map[letter] = (map[letter] || 0) + 1;
       return map;
    }, Object.create(null));
  }

  sanitize(word) {
    return word.toLowerCase().replace(/[^\wé]/g, '').trim();
  }
}

module.exports = Isogram;
