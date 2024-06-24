let select = document.querySelectorAll('#currency');
let button = document.getElementById('btn');
let input = document.getElementById('input');

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))

function displayDropDown(res){
    let result = Object.entries(res);
    for(let i = 0; i < result.length; i++){
        let curr = `<option value="${result[i][0]}">${result[i][0]}</option>`;
        select[0].innerHTML += curr;
        select[1].innerHTML += curr;
    }
}

button.addEventListener('click',() => {
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value
    if(curr1 === curr2)
        alert("Choose different currencies")
    else
        convert(curr1,curr2,inputVal)
})

function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
        document.getElementById('result').value = Object.values(data.rates)[0]
    });
}

//Object.values(data.rates) convert data.rates into array