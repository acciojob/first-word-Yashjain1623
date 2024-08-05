function firstWord(s) {
  // Trim the string to remove any leading or trailing whitespace
  s = s.trim();

  // Find the index of the first space in the string
  const spaceIndex = s.indexOf(' ');

  // If there's no space, return the entire string
  if (spaceIndex === -1) {
    return s;
  }

  // Otherwise, return the substring up to the first space
  return s.slice(0, spaceIndex);
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
