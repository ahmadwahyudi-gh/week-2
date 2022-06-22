const reverseSentence = (sentence) => {
  let arrayOfWords = [],
    reversedArrayOfWords = [],
    tempWord = "",
    reversedSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      tempWord += sentence[i];
    } else {
      arrayOfWords = [...arrayOfWords, tempWord];
      tempWord = "";
    }
  }
  arrayOfWords = [...arrayOfWords, tempWord];

  for (let i = 0; i < arrayOfWords.length; i++) {
    reversedArrayOfWords = [
      ...reversedArrayOfWords,
      arrayOfWords[arrayOfWords.length - i - 1],
    ];
    reversedSentence += `${reversedArrayOfWords[i]} `;
  }

  return reversedSentence;
};

const sentence = "lorem ipsum dolor sit amet";
const result = reverseSentence(sentence);
console.log(result);
