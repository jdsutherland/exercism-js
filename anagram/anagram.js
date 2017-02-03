class Anagram {
  constructor(subject) {
    this.subject = subject;
  }

  matches(...candidates) {
    if (this.hasArrayArguments(candidates[0])) {
      candidates = candidates[0];
    }

    return candidates.filter((candidate) => this.isAnagram(candidate))
  }

  hasArrayArguments(args) {
    return typeof args === 'object';
  }

  isAnagram(candidate) {
    return this.hasMatchingLengths(candidate) &&
      !this.subjectSameCandidate(candidate) &&
      this.hasSameCharacters(candidate);
  }

  hasMatchingLengths(candidate) {
    return this.subject.length === candidate.length;
  }

  subjectSameCandidate(candidate) {
    return this.subject.toLowerCase() === candidate.toLowerCase();
  }

  hasSameCharacters(candidate) {
    const subjectLetters = this.subject.toLowerCase().split('').sort().toString();
    const candidateLetters = candidate.toLowerCase().split('').sort().toString();

    return subjectLetters === candidateLetters;
  }
}

module.exports = Anagram;
