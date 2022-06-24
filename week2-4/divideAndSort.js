const divideAndSort = (number) => {
  const arrayNumToStr = number.toString().split("0");

  let arrayNum = [],
    sortedArrStr = [],
    joinedStr = [];

  for (let i = 0; i < arrayNumToStr.length; i++) {
    arrayNum[i] = arrayNumToStr[i]
      .split("")
      .map((string) => Number(string))
      .sort((a, b) => a - b);
    sortedArrStr[i] = arrayNum[i].map((number) => number.toString());
    joinedStr[i] = sortedArrStr[i].join("");
    // console.log(joinedStr[i]);
  }
  let joinAll = joinedStr.join("");
  return (joinAll = Number(joinAll));
};

const result = divideAndSort(5956560159466056);
console.log(result);
