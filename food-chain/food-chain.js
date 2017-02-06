const FoodChain = module.exports = {
  FOOD_CHAIN: {
    'fly': "",
    'spider': "It wriggled and jiggled and tickled inside her.\n",
    'bird': "How absurd to swallow a bird!\n",
    'cat': "Imagine that, to swallow a cat!\n",
    'dog': "What a hog, to swallow a dog!\n",
    'goat': "Just opened her throat and swallowed a goat!\n",
    'cow': "I don't know how she swallowed a cow!\n",
    'horse': "She's dead, of course!\n",
  },

  getKeyAtIndex(index) {
    return Object.keys(this.FOOD_CHAIN)[index];
  },

  getVerseAtKey(key) {
    return this.FOOD_CHAIN[key];
  },

  repeatedVerses(rank) {
    return [...this.reciteRepeatedVerses(rank)].join('\n');
  },

  *reciteRepeatedVerses(rank) {
    let current = rank;

    while (current >= 0) {
      const food = Food.getFood(current--);
      if (food.name === 'horse') break;
      yield food.repeatedVerse;
    }
  },

  verses(...range) {
    return [...this.reciteRangeOfVerses(...range)].join('\n') + '\n';
  },

  *reciteRangeOfVerses(starting, ending = 0) {
    let current = starting;

    while (current <= ending) {
      yield this.verse(current++);
    }
  },

  verse(number) {
    const food = Food.getFood(number - 1);

    let result =  (
      `I know an old lady who swallowed a ${food.name}.\n` +
      `${food.verse}` +
      `${this.repeatedVerses(food.rank)}`
      );

    return result;
  },
}

class Food {
  constructor(rank) {
    this.rank = rank;
  }

  static getFood(rank) {
    const name = FoodChain.getKeyAtIndex(rank);
    switch (name) {
      case 'fly':
        return new Fly(rank);
      case 'bird':
        return new Bird(rank);
      default:
        return new Food(rank);
    }
  }

  get name() {
    return FoodChain.getKeyAtIndex(this.rank);
  }

  get verse() {
    return FoodChain.getVerseAtKey(this.name);
  }

  get predecessor() {
    return FoodChain.getKeyAtIndex(this.rank - 1);
  }

  get repeatedVerse() {
    return `She swallowed the ${this.name} to catch the ${this.predecessor}.`;
  }
}

class Fly extends Food {
  constructor(rank) {
    super(rank);
  }

  get repeatedVerse() {
    return "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  }
}

class Bird extends Food {
  constructor(rank) {
    super(rank);
  }

  get repeatedVerse() {
    return 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.';
  }
}
