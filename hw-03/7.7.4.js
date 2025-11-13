const person = { name: 'Vasil', age: 28 };

function setFullName(fullName) {
  this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(person);
setPersonFullName('John Smith');

console.log('fullName:', person.fullName); 
console.log('person:', person);
