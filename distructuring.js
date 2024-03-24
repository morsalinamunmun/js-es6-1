const actor = {
    name: 'Ananata',
    age: 30,
    phone: '0175339889',
    money: 23567899876543
}
//if right side is an object left side of destructuring will be object as well
//use property name as a varible that contains the property value
//const {phone} = actor
//const {phone, age} = actor
const {phone, age: boyos} = actor

//bar bar dorkar hole
//const phone = actor.phone;
const name = actor.name;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(name);
console.log(name);
console.log(name);

//array destructuring
const numbers = [45, 34];
const [first, second] = numbers;
const [x, y] = [12, 34];
//function advance
function doubleThem(a, b){
    return [a*2, b*2];
}
const [f, s] = doubleThem(3, 4);
console.log(f, s);