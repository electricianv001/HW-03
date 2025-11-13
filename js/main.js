function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = { name: 'Vasil', age: 28 };

// вызываем printInfo от имени person
printInfo.call(person);
