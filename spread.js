const max = Math.max(6, 24, 56, 112, 70);
const numbers = [3, 6, 7, 4, 56, 90, 36, 78, 45];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

const friends = [3, 45, 34, 23, 19];
const bondhu = friends;
const dosto = [...friends];//copy
friends.push(20);
console.log(dosto);
console.log(friends);

//advance
const sonkha = [...friends, 9999];//add extra element while copy
//abr
const addSonkha = [23, 4, ...numbers, 45, 30];