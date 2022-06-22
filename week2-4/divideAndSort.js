const divideAndSort = (number) => {
  const arrayOfStringFromNumber = number.toString().split("0");

  let arrayOfNumber = [],
    sortedArrayOfString = [],
    joinedStringed = [];

  for (let i = 0; i < arrayOfStringFromNumber.length; i++) {
    arrayOfNumber[i] = arrayOfStringFromNumber[i]
      .split("")
      .map((string) => Number(string))
      .sort((a, b) => a - b);
    sortedArrayOfString[i] = arrayOfNumber[i].map((number) => number.toString());
    joinedStringed[i] = sortedArrayOfString[i].join("");
    // console.log(joinedStringed[i]);
  }
  let joinAll = joinedStringed.join("");
  return (joinAll = Number(joinAll));
};

const result = divideAndSort(5956560159466056);
console.log(result);
