// 3

let sum = 0;
let number = 153;

let temp = number; 

while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10); 
}

if (sum == number) {
    // console.log(`${number} is an Armstrong number`);
    document.querySelector('.pr33').innerHTML += `${number} = is an Armstrong number.`;
}
else {
    // console.log(`${number} is not an Armstrong number.`);
    document.querySelector('.pr33').innerHTML += `${number} = is not an Armstrong number.`;
    
}