const FoodChain = module.exports = {
  verse(...number) {
    let lastVerse = 0;
    debugger;

    if (number.length == 2) {
      lastVerse = number[0] - 1;
      number = number[1];
    } else {
      number = number[0];
    }

    debugger;
    let result = '';

    for (var i = number-1; i < number; i++) {
      let currentNoun = this.getNoun(i);
      result += this.knowVerse(currentNoun);
      result += this.SWALLOW[currentNoun];

      if (currentNoun == 'horse') {
        return result;
      }

      for (var j = i; j >= lastVerse; j--) {
        result += this.repeatedVerse(j);
      }
    }

    return result.slice(0, -1);
  },

  SWALLOW: {
    'fly': "",
    'spider': "It wriggled and jiggled and tickled inside her.\n",
    'bird': "How absurd to swallow a bird!\n",
    'cat': "Imagine that, to swallow a cat!\n",
    'dog': "What a hog, to swallow a dog!\n",
    'goat': "Just opened her throat and swallowed a goat!\n",
    'cow': "I don't know how she swallowed a cow!\n",
    'horse': "She's dead, of course!\n",
  },

  getNoun(index) {
    return Object.keys(this.SWALLOW)[index];
  },

  knowVerse(noun) {
    return `I know an old lady who swallowed a ${noun}.\n`;
  },

  repeatedVerse(currentKeyIndex) {
    let currentNoun = this.getNoun(currentKeyIndex);
    let previousNoun = this.getNoun(currentKeyIndex - 1);

    let verse = `She swallowed the ${currentNoun} to catch the ${previousNoun}.\n`;

    if (currentNoun == 'fly') {
      return this.flyVerse();
    } else if (previousNoun == 'spider') {
      return this.spiderVerse(verse);
    } else {
      return verse;
    }
  },

  flyVerse() {
    return `I don't know why she swallowed the fly. Perhaps she'll die.\n\n`
  },

  spiderVerse(verse) {
    return verse.replace('.\n', ' ') + 'that wriggled and jiggled and tickled inside her.\n';
  },
}

debugger;
FoodChain.verse(1);
