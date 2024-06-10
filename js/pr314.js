var str='';
var count=1;
let pr14 = document.querySelector('.pr14');
for(var row=1;row<=5;row++)
    {
    for(var col=1;col<=row;col++)
        {
        str+=count+" ";
        count++;
    }
    str+='<br>'
}
// console.log(str);
pr14.innerHTML += str;
