function convert(heading) {
  if (!isValidMarkdown(heading)) { return "Invalid format"; }
  if (countHashes(heading) > 6) { return "Invalid format"; }

  const trimmedHeading = heading.trim();
  let fullyTrimmedHeading = "";

  for (let i = 0; i < trimmedHeading.length; i++) {
    if (trimmedHeading[i] !== " " && trimmedHeading[i] !== "#") {
      fullyTrimmedHeading = trimmedHeading.slice(i);
      break;
    }
  }
  
  const hashCount = countHashes(trimmedHeading);
  return `<h${hashCount}>${fullyTrimmedHeading}</h${hashCount}>`;
}

// HELPER to count markdown hashes
const countHashes = str => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") { count++; };
    if (str[i + 1] !== "#") { break; }
  }
  return count;
}

// HELPER to determine if markdown is valid
const isValidMarkdown = str => {
  if (str[0] !== "#" && str[0] !== " ") { return false; }

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let nextChar = str[i + 1];
    if (currentChar === "#" && (nextChar !== "#" && nextChar !== " ")) { return false; }
    break;
  }

  return true;
}
