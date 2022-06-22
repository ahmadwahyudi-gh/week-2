const palindromeCheck = (word, callback) => {
  if (!(typeof word === "string")) return "Inputan harus berupa string!";

  const wordInLowerCase = callback(word);
  let reversedWord = "";

  for (let i = wordInLowerCase.length - 1; i >= 0; i--) {
    reversedWord += wordInLowerCase[i];
  }

  if (wordInLowerCase != reversedWord)
    return `${wordInLowerCase} is not palindrome.`;
  return `${wordInLowerCase} is palindrome.`;
};

const manualLowerCase = (word) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (!(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90)) {
      result += word[i];
    } else {
      let lowerCaseAscii = word.charCodeAt(i) + 32;
      let charFromAscii = String.fromCharCode(lowerCaseAscii);
      result += charFromAscii;
    }
  }
  return result;
};

const result = palindromeCheck("Malam", manualLowerCase);
console.log(result);
