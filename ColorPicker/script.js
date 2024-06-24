let button = document.getElementById("click");
let hex = document.getElementById("value");
let backround = document.querySelector(".container");
let hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

button.addEventListener('click',makeCode);

function makeCode(){
    let hexValue = "#";
    for(let i = 1; i < 7; i++ ){
        hexValue += choose();
    }
    backround.style.backgroundColor = hexValue;
    hex.innerHTML = hexValue;
}

function choose(){
    let random = Math.floor(Math.random()*16);
    return hexArray[random];
}