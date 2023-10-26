// const reverseString = (str) => str.split("").reverse().join("");

function reverseString(str) {
  let reverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

module.exports = reverseString;
