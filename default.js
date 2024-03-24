//without default parameters
/*function add(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
add(5) */  //output: 5 undefined NaN;

//default=> if value is not provided, take this as a default
function add(num1 = 99, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
add(5)

function fullName(first, last = ''){
    const full = first + ' ' + last;
    return full;
}
const f = fullName('moon');
console.log(f);

//array default
function friends(numbers = []){

}
//object default
function persons(details = {}){

}

