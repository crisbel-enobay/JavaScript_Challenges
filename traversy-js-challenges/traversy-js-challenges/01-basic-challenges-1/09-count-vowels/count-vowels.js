function countVowels(str) {
  const formatterStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const char = formatterStr[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
