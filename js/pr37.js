let no1 = 1729;
var tp = no1;
var rev = 0;
var sumOfDigits = 0;
let pr37 = document.querySelector('.pr37');

while (tp > 0) {
    sumOfDigits = sumOfDigits + tp % 10;
    tp = tp 
    tp = (tp / 10) | 0; 
}

tp = sumOfDigits; 

while (tp > 0) {
    rev = rev * 10 + tp % 10;
    tp = tp 
    tp = (tp / 10) | 0; 
}


if (rev * sumOfDigits === no1) {
    pr37.innerHTML += no1 + " is a Magic Number.";

} else {
    pr37.innerHTML += no1 + " is not a Magic Number.";
}
