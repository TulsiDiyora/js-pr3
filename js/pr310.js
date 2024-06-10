
var currentNumber = 1;
let pr310 = document.querySelector('.pr310');

do {
    if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {
        pr310.innerHTML += "FizzBuzz" + "<br>";
    } 
    else if (currentNumber % 3 == 0) {
        pr310.innerHTML += "Fizz" + "<br>";
    } 
    else if (currentNumber % 5 == 0) {
        pr310.innerHTML += "Buzz" + "<br>";
    } 
    else {
        pr310.innerHTML += currentNumber + "<br>";
    }

    currentNumber++;
} while (currentNumber <= 10);
