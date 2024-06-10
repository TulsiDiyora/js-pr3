let q = 15;
let r=1;
let flag=0;
let pr36 = document.querySelector('.pr36');

  while(r<=q)
  {
    if(q % r == 0)
    {
      flag++;
    }
    r++
  }
    if(flag==2)
      {
        //  console.log(q+" is prime number");
         pr36.innerHTML += q+" is prime number";
        }
       
    else{ 
        // console.log(q+" is not a prime number"); 
        pr36.innerHTML += q+" is prime number";
    }    
 document.querySelector('.pr36').innerHTML += '<br>';             
