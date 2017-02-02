var song = require('./beer-song');

describe('BeerSong', function() {
  it('prints an arbitrary verse', function() {
    var expected = '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n';
    expect(song.verse(8)).toEqual(expected);
  });

  it('handles 2 bottles', function() {
    var expected = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
    expect(song.verse(2)).toEqual(expected);
  });

  it('handles 1 bottle', function() {
    var expected = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    expect(song.verse(1)).toEqual(expected);
  });

  it('handles 0 bottles', function() {
    var expected = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(song.verse(0)).toEqual(expected);
  });

  it('throws when given too many arguments', function() {
    var expected = new RangeError('Invalid arguments: max 2.');
    expect(() => song.sing(0, 2, 3)).toThrow(expected);
  });

  it("throws when given 2 arguments that aren't decreasing order", function() {
    var expected = new RangeError('Invalid arguments: must be in decreasing order.');
    expect(() => song.sing(1, 8)).toThrow(expected);
  });

  it("throws when given a negative argument", function() {
    var expected = new RangeError('Invalid arguments: cannot be negative.');
    expect(() => song.sing(-1)).toThrow(expected);
  });

  it("throws when given arguments containing a negative value", function() {
    var expected = new RangeError('Invalid arguments: cannot be negative.');
    expect(() => song.sing(1, -8)).toThrow(expected);
  });

  it('sings several verses', function() {
    var expected = '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n'.trim();
    expect(song.sing(8, 6)).toEqual(expected);
  });

  it('sings the rest of the verses', function() {
    var expected = '3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'.trim();
    expect(song.sing(3)).toEqual(expected);
  });
});
