function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = { name: 'Vasil', age: 28 };


printInfo.call(person);
