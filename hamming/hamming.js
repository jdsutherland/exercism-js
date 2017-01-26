var Hamming = function() {};

Hamming.prototype.compute = function(strandA, strandB) {
  let hammingDistanceCount = 0;

  if (strandA.length !== strandB.length) {
    throw new Error('DNA strands must be of equal length.');
  } else {

    for (var i = 0, len = strandA.length; i < len; i++) {
      if (strandA[i] != strandB[i]) {
        hammingDistanceCount++;
      }
    }
  }

  return hammingDistanceCount;
}

module.exports = Hamming;
