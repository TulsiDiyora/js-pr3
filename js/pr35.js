var limit = 100;
var a = 0, b = 1, result;
let pr35 = document.querySelector('.pr35');

while (b <= limit) {
    // console.log(b);
    pr35.innerHTML += +b +"<br>";

    result = a + b;
    a = b;
    b = result;
}

