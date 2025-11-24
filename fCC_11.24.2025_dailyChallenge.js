function isValidMessage(message, validator) {
  // letters are case-insensitive
  const lowerCaseMessage = message.toLowerCase();
  const lowerCaseValidator = validator.toLowerCase();
  const lowerCaseMessageArray = lowerCaseMessage.split(" ");

  // each word in message starts with corresponding letter in validation string
  if (lowerCaseValidator.length !== lowerCaseMessageArray.length) { return false; }

  for (let i = 0; i < lowerCaseMessageArray; i++) {
    let firstChar = lowerCaseMessageArray[i][0];
    let currentValidationChar = lowerCaseValidator[i];

    if (firstChar !== currentValidationChar) {
      return false;
    }
  }

  // words in message are separated by single spaces
  for (let i = 0; i < lowerCaseMessage.length; i++) {
    let currentChar = lowerCaseMessage[i];
    let nextChar = lowerCaseMessage[i + 1];
    if (currentChar === " " && nextChar === " ") {
      return false;
    }
  }

  return true;
}
