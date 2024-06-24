let finaldiv = document.createElement("div");
finaldiv.id = "output";
document.querySelector(".wrapper").appendChild(finaldiv);

let button = document.querySelector("button");
button.addEventListener("click",calculate);

function calculate(){
    let input = String(document.getElementById("input").value);
    let array = input.split(" ");
    let first = Number(array[0]);
    let second = Number(array[2]);
    let expre = array[1];
    let result = 0;
    switch(expre){
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            result = (first / second).toFixed(3);
            break;
    }
    document.getElementById("output").innerHTML = result;
}