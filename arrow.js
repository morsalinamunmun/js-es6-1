//function declaration
/* function add(a, b){
    const result = a + b;
    return result;
} */

function add(a, b){
    return a + b;
}

//function expression
const add1 = function(a, b){
    return a + b;
}

//arrow function
const add2 = (a, b) => a + b;

//const sum = add2(23, 4);
const add3 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const sum = add3(3, 2, 5, 8); 
console.log(sum);

const multiply = (num1, num2) => num1 * num2;
const multi = multiply(3, 4);
//minimize
const difference = (x, y) => x-y;
const getAge = (person) => person.age;
const student = {name: 'ononna', age: 32};
const age = getAge(student);
console.log(age);

//single parameter hole braket chara likha jabe
const getThird = numbers => numbers[2];
const num = getThird([12, 15, 23, 28]);
console.log(third);

//ak line auto return
const doubleIt = number => number * 2;

//no parameter
const getPI = () => Math.PI;
console.log(getPI());

//large arrow function multiple line likhle return korte hobe if you want to get anything returned from this function. Then you have to use the return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}