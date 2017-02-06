class Anagram {
  constructor(subject) {
    this.subject = subject;
  }

  matches(...candidates) {
    if (candidates[0] instanceof Array) {
      candidates = candidates[0];
    }

    return candidates.filter(this.isAnagram, this);
  }

  isAnagram(candidate) {
    return this.hasMatchingLengths(candidate) &&
      !this.subjectSameCandidate(candidate) &&
      this.hasMatchingLetters(candidate);
  }

  hasMatchingLengths(candidate) {
    return this.subject.length === candidate.length;
  }

  subjectSameCandidate(candidate) {
    return this.subject.toLowerCase() === candidate.toLowerCase();
  }

  hasMatchingLetters(candidate) {
    return this.getSortedString(this.subject) === this.getSortedString(candidate);
  }

  getSortedString(string) {
    return string.toLowerCase().split('').sort().join().replace(/,/g, '');
  }
}

module.exports = Anagram;
