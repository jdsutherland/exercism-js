class BeerSong {
  sing(...verses) {
    this.validateArguments(verses);
    return this.verses(...verses);
  }

  verses(starting, ending = 0) {
    let verses = '';

    while(starting >= ending) {
      verses += this.verse(starting) + '\n';
      starting--;
    }

    return verses.trim();
  }

  verse(number) {
    const factory = new BottleFactory();
    const bottle = factory.getBottle(number);
    const nextBottle = factory.getBottle(bottle.successor());

    return `` +
      `${bottle.quantity().capitalize()} ${bottle.container()} of beer on the wall, ` +
      `${bottle.quantity()} ${bottle.container()} of beer.\n` +
      `${bottle.action()}, ` +
      `${nextBottle.quantity()} ${nextBottle.container()} of beer on the wall.\n`;
  }

  validateArguments(...args) {
    if (args.length > 2 || args.length < 1) {
      throw "Invalid arguments: max 2.";
    }
    if (args.length == 2 && args[0] < args[1]) {
      throw "Invalid arguments: must be in decreasing order.";
    }
  }
}

class Bottle {
  constructor(number) {
    this.number = number;
  }

  container() {
    return 'bottles';
  }

  quantity() {
    return this.number.toString();
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around`;
  }

  pronoun() {
    return 'one';
  }

  successor() {
    return this.number - 1;
  }
}

class OneBottle extends Bottle {
  constructor() {
    super(1);
  }

  container() {
    return 'bottle';
  }

  pronoun() {
    return 'it';
  }
}

class ZeroBottle extends Bottle {
  constructor() {
    super(0);
  }

  quantity() {
    return 'no more';
  }

  action() {
    return 'Go to the store and buy some more';
  }

  successor() {
    return 99;
  }
}

class BottleFactory {
  getBottle(number) {
    switch (number) {
      case 1:
        return new OneBottle(number);
        break;
      case 0:
        return new ZeroBottle(number);
        break;
      default:
        return new Bottle(number);
    }
  }
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

module.exports = BeerSong;
