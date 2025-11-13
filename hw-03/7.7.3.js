

const users = [
  { name: 'Vasil', age: 28 },
  { name: 'Anna',  age: 17 },
  { name: 'Mila',  age: 18 },
  { name: 'Oleg',  age: 22 },
];

const adults = users.filter(u => Number(u.age) >= 18);
const names  = adults.map(u => u.name);

console.log('adults:', adults);
console.log('names:', names);


