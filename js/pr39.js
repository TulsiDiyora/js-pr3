var total = 0;
var currentNumber = 0;
do {
    total += currentNumber;
    currentNumber++;
} while (currentNumber <= 30);

var result = total;

console.log("The sum of integers between 0 and 30 is:", result);
document.querySelector('.pr39').innerHTML += "The sum of integers between 0 and 30 is:" + result;
