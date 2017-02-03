class Anagram {
  constructor(subject) {
    this.subject = subject;
  }

  matches(...candidates) {
    if (candidates[0] instanceof Array) {
      candidates = candidates[0];
    }

    return candidates.filter((candidate) => this.isAnagram(candidate))
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
    const subjectLetters = this.subject.toLowerCase().split('').sort().toString();
    const candidateLetters = candidate.toLowerCase().split('').sort().toString();

    return subjectLetters === candidateLetters;
  }
}

module.exports = Anagram;
