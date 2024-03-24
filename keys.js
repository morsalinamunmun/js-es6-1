const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
//name, color, price, isCleaned=> property, keys(glass, golden, 12, true=> values)
const keys = Object.keys(glass);
const values = Object.values(glass);

const pair = Object.entries(glass);
console.log(pair);//array of array, two dimensional value
//output:
/* [
    ['name', 'glass'],
    ['color', 'golden'],
    ['price', 12],
    ['isCleaned', true]
] */

//delete
delete glass.isCleaned;
console.log(glass);
//other way delete
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

//Object.freeze(glass); ata thakle update korle update hobe na add delete hobe na
Object.seal(glass); //update hobe but akbare add, delete hobe na
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);
