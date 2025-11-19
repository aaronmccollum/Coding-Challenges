/*
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-18

Welcome to the 100th Daily Coding Challenge! 
Given a string, repeat its characters until the result is exactly 100 characters long. 
If your repetitions go over 100 characters, trim the extra so it's exactly 100.
*/

function oneHundred(chars) {

  let oneHundredChars = "";

  // While oneHundredChars length is less than 100 - length of chars, concat entire chars
  const wholeCharsStringLengthForConcat = 100 - chars.length;
  let i = 0;
  while (i < wholeCharsStringLengthForConcat) {
    oneHundredChars += chars;
    i += chars.length;
  }

  // Once length is less than 100 - chars length, increment through each char until 100.
  for (let j = 0; oneHundredChars.length < 100; j++) {
    oneHundredChars += chars[j];
  }
  return oneHundredChars;
}
