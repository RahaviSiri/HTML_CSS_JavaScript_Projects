let arr = [4,6,2,3,1,1,3,5,7,8,4,3];
let newArr = [];

function RemoveDuplicate(val){
    if(!(newArr.includes(val))){
        newArr.push(val);
    }
}
arr.forEach(RemoveDuplicate);
console.log(newArr);

// ----------------------------------------------

let Name = "Robert Andrew George";
let arr2 = Name.split(" ");

let array = arr2.map(val => val[0]);
let str = "";
array.forEach(val => str += val);
console.log(str);

// ----------------------------------------------

Input = [6, -5, 7, -2, 4, 6,-1];
let newInput = Input.filter(x => x > 0);
let final = newInput.reduce((str,val) => val+str)
console.log(final);