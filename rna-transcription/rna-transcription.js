var DnaTranscriber = function() {};

const BASE_PAIRS = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
};

var re = new RegExp(Object.keys(BASE_PAIRS).join('|'), 'ig');

DnaTranscriber.prototype.toRna = function(dna) {
  return dna.replace(re, (base) => BASE_PAIRS[base]);
}

module.exports = DnaTranscriber;
