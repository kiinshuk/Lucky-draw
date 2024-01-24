const btn = document.getElementById("roll").onclick;
const label1 = document.getElementById("l1");
const label2 = document.getElementById("l2");
const label3 = document.getElementById("l3");
const resul = document.getElementById("result");
const min = 1;
const max = 9;
let randomnum1;
let randomnum2;
let randomnum3; 

document.getElementById("roll").onclick = function (){
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    randomnum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomnum1;
    label2.textContent = randomnum2;
    label3.textContent = randomnum3;

    if(randomnum1 == randomnum2 && randomnum2 == randomnum3){
        console.log("good");
        resul.textContent = "Lucky";
    }
}