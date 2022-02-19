let pass = document.getElementById('passScreen').value;
let c=3;

const pin = document.getElementById('generate');
pin.addEventListener("click",function(event){
    document.getElementById('matched').style.display="none";
    document.getElementById('wrong').style.display="none";

while(1){
let p = Math.random()*10000;
let q = Math.round(p);
if(999<q){
    document.getElementById('pinScreen').value =q;
    break;
}
}
});

document.getElementById('zero').addEventListener("click" , function(event){
    pass=pass+"0";
document.getElementById('passScreen').value = pass;
})
document.getElementById('one').addEventListener("click" , function(event){
    pass=pass+"1";
document.getElementById('passScreen').value = pass;
})
document.getElementById('two').addEventListener("click" , function(event){
    pass=pass+"2";
document.getElementById('passScreen').value = pass;
})
document.getElementById('three').addEventListener("click" , function(event){
    pass=pass+"3";
document.getElementById('passScreen').value = pass;
})
document.getElementById('four').addEventListener("click" , function(event){
    pass=pass+"4";   
document.getElementById('passScreen').value = pass;
})
document.getElementById('five').addEventListener("click" , function(event){
    pass=pass+"5";
document.getElementById('passScreen').value = pass;
})
document.getElementById('six').addEventListener("click" , function(event){
    pass=pass+"6";
document.getElementById('passScreen').value = pass;
})
document.getElementById('seven').addEventListener("click" , function(event){
    pass=pass+"7";
document.getElementById('passScreen').value = pass;
})
document.getElementById('eight').addEventListener("click" , function(event){
    pass=pass+"8";
document.getElementById('passScreen').value = pass;
})
document.getElementById('nine').addEventListener("click" , function(event){
    pass=pass+"9";
document.getElementById('passScreen').value = pass;
})
document.getElementById("clear").addEventListener("click", function(event){
 pass="";
 document.getElementById('passScreen').value = pass;
})
document.getElementById("back").addEventListener("click", function(event){
const snumber = document.getElementById("passScreen").value;
let screenNumber = parseInt(snumber);
const othernumber = document.getElementById('passScreen');
let temp = "";
let l = pass.length-1;
for( var i=0; i<l; i++ ){
    temp+=pass[i];
}
pass=temp;
othernumber.value= pass;
})
document.getElementById("submitbtn").addEventListener("click" ,  function(event){
let pscreen = document.getElementById('pinScreen').value;
let kscreen = document.getElementById('passScreen').value;

if(pscreen==kscreen){
c = 3;
document.getElementById('matched').style.display="block";
document.getElementById('wrong').style.display="none";
}

else{
c--;
document.getElementById('wrong').style.display="block";
document.getElementById('matched').style.display="none";
}
if(c==3)
{
document.getElementById("tryLeft").innerText="3";
}

else if(c==2)
{
document.getElementById("tryLeft").innerText="2";
}

else if(c==1)
{
document.getElementById("tryLeft").innerText="1";
}

else 
{
c = 0;
document.getElementById("tryLeft").innerText="0";
document.getElementById("submitbtn").style.display="none";
document.getElementById('passScreen').style.display="none";
}



})