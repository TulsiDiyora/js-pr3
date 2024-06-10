var ans = 0;
var result = "";

for (var t = 1; t <= 10; t++) {
    ans += t * t;

    result += t * t;

    if (t < 10) {
        result += "+";
    }
}

// console.log(result + " = " + ans);
document.querySelector('.pr12').innerHTML += result + " = " + ans;

