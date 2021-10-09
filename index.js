

class Man {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Getter
  get getName() {
    return this.name;
  }

  get getAge() {
    return this.age;
  }

}

const colin = new Man('colin', 34);
const Zane = new Man('Zane', 27);

console.log(colin.getName);
console.log(colin.getAge);
console.log(Zane.getName);
console.log(Zane.getAge);

