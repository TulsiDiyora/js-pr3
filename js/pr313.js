// 13.

let string = "";
let pr13 = document.querySelector('.pr13');

for(let k = 5; k >= 1; k--)
    {
     for(let l = 5; l>= k; l--)
     {
      pr13.innerHTML += l;
       
     }
     pr13.innerHTML += "<br>";
}

