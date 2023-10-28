// function isPalindrome(str) {
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//   const reverseStr = formattedStr.split("").reverse().join("");
//   return str === reverseStr;
// }

function isPalindrome(str) {
  const formattedStr = removeNonAlphanumeric(str.toLowerCase());
  const reverseStr = reverseString(formattedStr);

  return formattedStr === reverseStr;
}

function removeNonAlphanumeric(str) {
  let formattedStr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // numbers is 0-9 in alphanumeric
    (code >= 97 && code <= 122) // letters a-z
  );
}

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

module.exports = isPalindrome;
