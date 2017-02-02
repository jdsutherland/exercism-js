const BeerSong = module.exports =  {
  sing(...verses) {
    this.validateArguments(...verses);
    return [...this.recite(...verses)].join('\n').trim();
  },

  *recite(starting, ending = 0) {
    let current = starting;

    while(current >= ending) {
      yield this.verse(current--);
    }
  },

  verse(number) {
    const bottle = Bottle.getBottle(number);
    const nextBottle = bottle.successor;

    return (
      `${bottle.Quantity} ${bottle.container} of beer on the wall, ` +
      `${bottle.quantity} ${bottle.container} of beer.\n` +
      `${bottle.action}, ` +
      `${nextBottle.quantity} ${nextBottle.container} of beer on the wall.\n`
      );
  },

  validateArguments(...args) {
    if (args.length > 2) {
      throw new RangeError('Invalid arguments: max 2.');
    }
    if (args.length == 2 && args[0] < args[1]) {
      throw new RangeError('Invalid arguments: must be in decreasing order.');
    }
    if (!args.every((arg) => arg >= 0)) {
      throw new RangeError('Invalid arguments: cannot be negative.');
    }
  },
}

class Bottle {
  constructor(number = 99, {
    quantity  = number.toString(),
    container = 'bottles',
    pronoun   = 'one',
    action    = `Take ${pronoun} down and pass it around`,
  } = {}) {
    this.number = number;
    this.quantity = quantity;
    this.container = container;
    this.pronoun = pronoun;
    this.action = action;
  }

  static getBottle(number) {
    switch (number) {
      case 1:
        return new OneBottle();
      case 0:
        return new ZeroBottle();
      default:
        return new Bottle(number);
    }
  }

  get Quantity() {
    return this.quantity.charAt(0).toUpperCase() + this.quantity.substr(1);
  }

  get successor() {
    return Bottle.getBottle(this.number - 1);
  }
}

class OneBottle extends Bottle {
  constructor() {
    super(1, {
      container: 'bottle',
      pronoun: 'it',
    });
  }
}

class ZeroBottle extends Bottle {
  constructor() {
    super(0, {
      quantity: 'no more',
      action: 'Go to the store and buy some more',
    });
  }

  get successor() {
    return new Bottle(99);
  }
}

module.exports = BeerSong;
