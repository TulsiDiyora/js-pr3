

let j=1;
let no= 5;
let fact = 1;
let pr32 = document.querySelector('.pr32')

while(j<=no) // 1
{
  fact = fact*j  // f= 1*2 = 1*2*3*4*5
  j++  //1+1 =2+1 = 3+1 =4+1 = 5+1 = 6= false
}
// console.log(fact) //=120
pr32.innerHTML += ("Factorial of  = "  + fact);
