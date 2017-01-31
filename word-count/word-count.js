class Words {
  count(words) {
    const counts = this.sanitize(words).reduce((map, word) => {
      map[word] = (map[word] || 0) + 1;
      return map;
    }, Object.create(null));

    return counts;
  }

  sanitize(words) {
    const reWhiteList = /[^\w\s\u0000-\u052F]/g;
    const reBlackList = /[\?¿\!¡&@\$%\^:\.]/g;
    const reEnclosedApostrophe = /'(\w+)'/g;
    const reMultipleWhitespace = /\s+/g;

    return words.toLowerCase().replace(reWhiteList, '')
      .replace(reBlackList, '')
      .replace(reEnclosedApostrophe, '$1')
      .replace(reMultipleWhitespace, ' ').trim().split(/[\s,]/);
  }
}

module.exports = Words;
