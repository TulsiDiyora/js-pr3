let pr11 = document.querySelector('.pr11');

for(i = 1; i <= 10; i++){
    if(i < 10){
        pr11.innerHTML +=  i + '-';
    }
    else{
        pr11.innerHTML +=  i ;
    }
}
pr11.innerHTML += '<br>' + '<br>';