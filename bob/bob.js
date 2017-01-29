class Bob {
  constructor() {
    this.BLANK_RESPONSE = 'Fine. Be that way!';
    this.QUESTION_RESPONSE = 'Sure.';
    this.YELLING_RESPONSE = 'Whoa, chill out!';
    this.DEFAULT_RESPONSE = "Whatever.";
  }

  hey(message) {
    if (this.isBlank(message)) {
      return this.BLANK_RESPONSE;
    } else if (this.isYelling(message)) {
      return this.YELLING_RESPONSE;
    } else if (this.isQuestion(message)) {
      return this.QUESTION_RESPONSE;
    }
    return this.DEFAULT_RESPONSE;
  }

  isBlank(message) {
    return !message.trim();
  }

  isQuestion(message) {
    return message[message.length-1] == '?';
  }

  isYelling(message) {
    if (!/[A-Z]/g.test(message)) return false;
    return message == message.toUpperCase();
  }
}

module.exports = Bob;
