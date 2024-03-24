const numbers = [2, 3, 4, 5];
for(const number of numbers){
    //console.log(number);
}

const nobab = 'siraj udd doula';
for(const char of nobab){
   // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
//wrong
/* for(const key of glass){
    console.log(key);
} */

//correct
for(const key in glass){
    const value = glass[key];
   // console.log(key, value);
}

//optional
const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    const value = glass[key];
    console.log(key, value)
}

//for of use on array or string not in object
//for in use on object