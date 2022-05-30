//write function that prints downward triangle of numbers
//input: number of rows
//output: downward triangle of numbers

function triangleOfNumbers(n) {
  for (let i = n; i >= 0; i--) {
    let line = ""
    for (let j = 1; j <= i; j++) {
      line += j + " "
    }
    console.log(line)
  }
}
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})
readline.question("Enter your number:", (number) => {
  if (isNaN(number)) {
    console.log("You entered not a number")
  } else {
    triangleOfNumbers(number)
  }

  readline.close()
})
