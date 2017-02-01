class BeerSong {
  sing(...verses) {
    this.validateArguments(verses);

    const starting = verses[0];
    const ending = (verses.length == 2) ? verses[1] : 0;

    return this.verses(starting, ending);
  }

  verses(starting, ending) {
    let verses = '';

    while(starting >= ending) {
      verses += this.verse(starting) + '\n';
      starting--;
    }

    return verses.trim();
  }

  verse(number) {
    const bottleNumber = new BottleNumber(number);
    const nextBottleNumber = new BottleNumber(bottleNumber.successor());

    return `` +
      `${bottleNumber.quantity().capitalize()} ${bottleNumber.container()} of beer on the wall, ` +
      `${bottleNumber.quantity()} ${bottleNumber.container()} of beer.\n` +
      `${bottleNumber.action()}, ` +
      `${nextBottleNumber.quantity()} ${nextBottleNumber.container()} of beer on the wall.\n`;
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

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  container() {
    return (this.oneLeft()) ? 'bottle' : 'bottles';
  }

  quantity() {
    return (this.noneLeft()) ? 'no more' : this.number.toString();
  }

  action() {
    return (this.noneLeft()) ? 'Go to the store and buy some more' :
                               `Take ${this.pronoun()} down and pass it around`;
  }

  pronoun() {
    return (this.oneLeft()) ? 'it' : 'one';
  }

  successor() {
    return (this.noneLeft()) ? 99 : this.number - 1;
  }

  oneLeft() {
    return this.number == 1;
  }

  noneLeft() {
    return this.number == 0;
  }
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

module.exports = BeerSong;
