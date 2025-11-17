/*  
Challenge link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-17

Given two strings representing fingerprints, determine if they are a match using the following rules:

1. Each fingerprint will consist only of lowercase letters (a-z).
2. Two fingerprints are considered a match if:
   - They are the same length.
   - The number of differing characters does not exceed 10% of the fingerprint length.
*/

function isMatch(fingerprintA, fingerprintB) {
  // return false if lengths are not the same
  if (fingerprintA.length !== fingerprintB.length) { return false };

  // count the amount of different chars
  let count = 0;
  for (let i = 0; i < fingerprintA.length; i++) {
    if (fingerprintA[i] !== fingerprintB[i]) {
      count += 1;
    }
  }

  // generate percentage of different chars
  const percentageTheSame = parseFloat(count) / parseFloat(fingerprintA.length);

  // return false if differences are above 10%, otherwise true
  if (percentageTheSame > 0.1) { return false; }
  return true;
}
