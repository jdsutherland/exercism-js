const song = require('./food-chain');

describe('Food Chain', function () {

  it('fly', function () {
    const expected = 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    expect(song.verse(1)).toEqual(expected);
  });

  it('spider', function () {
    const expected = 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    expect(song.verse(2)).toEqual(expected);
  });

  it('bird', function () {
    const expected = 'I know an old lady who swallowed a bird.\n' +
      'How absurd to swallow a bird!\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    expect(song.verse(3)).toEqual(expected);
  });

  it('cat', function () {
    const expected = 'I know an old lady who swallowed a cat.\n' +
      'Imagine that, to swallow a cat!\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(4)).toEqual(expected);
  });

  it('dog', function () {
    const expected = 'I know an old lady who swallowed a dog.\n' +
      'What a hog, to swallow a dog!\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(5)).toEqual(expected);
  });

  it('goat', function () {
    const expected = 'I know an old lady who swallowed a goat.\n' +
      'Just opened her throat and swallowed a goat!\n' +
      'She swallowed the goat to catch the dog.\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(6)).toEqual(expected);
  });

  it('cow', function () {
    const expected = 'I know an old lady who swallowed a cow.\n' +
      'I don\'t know how she swallowed a cow!\n' +
      'She swallowed the cow to catch the goat.\n' +
      'She swallowed the goat to catch the dog.\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(7)).toEqual(expected);
  });

  it('horse', function () {
    const expected = 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';

    expect(song.verse(8)).toEqual(expected);
  });

  it('multiple verses', function () {
    let expected = '';

    expected += 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';

    expect(song.verses(1, 2)).toEqual(expected);
  });

  it('the whole song', function () {
    let expected = '';

    expected += 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a bird.\n' +
    'How absurd to swallow a bird!\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
     expected += 'I know an old lady who swallowed a cat.\n' +
    'Imagine that, to swallow a cat!\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a dog.\n' +
    'What a hog, to swallow a dog!\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a goat.\n' +
    'Just opened her throat and swallowed a goat!\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a cow.\n' +
    'I don\'t know how she swallowed a cow!\n' +
    'She swallowed the cow to catch the goat.\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n\n';

    expect(song.verses(1, 8)).toEqual(expected);
  });

  it('throws when given too many arguments', function() {
    const expected = new RangeError('Invalid arguments: max 2.');
    expect(() => song.verses(0, 2, 3)).toThrow(expected);
  });

  it("throws when given 2 arguments that aren't in increasing order", function() {
    const expected = new RangeError('Invalid arguments: must be in increasing order.');
    expect(() => song.verses(8, 1)).toThrow(expected);
  });

  it("throws when given a negative argument", function() {
    const expected = new RangeError('Invalid arguments: cannot be negative.');
    expect(() => song.verses(-1)).toThrow(expected);
  });

  it("throws when given arguments containing a negative value", function() {
    const expected = new RangeError('Invalid arguments: cannot be negative.');
    expect(() => song.verses(-8, 1)).toThrow(expected);
  });
});

