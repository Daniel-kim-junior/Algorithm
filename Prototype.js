// function Parent(name) {
//   this.name = name;
// }

// Parent.prototype.sayName = function () {
//   console.log(`my name is ${this.name}`);
// };

// function Children(name, age) {
//   Parent.call(this, name);
//   this.age = age;
// }

// Children.prototype = Object.create(Parent.prototype);

// Children.prototype.sayAge = function () {
//   console.log(`my age is ${this.age}`);
// };

// let p1 = new Children("yub", 20);

// p1.sayName();

// let Person = {
//   sayName: function () {
//     console.log(`my name is ${this.name}`);
//   },
// };

// let p1 = Object.create(Person);
// p1.name = "name";

// p1.sayName();
// console.log(p1.__proto__ === Person);

// let p2 = { name: 'darkin' };
// Object.setPrototypeOf(p2, Person);

let parent = {
  sayName: function () {
    console.log(`my name is parent`);
  },
};

let children = {
  sayAge: function () {
    console.log(`my age is child`);
  },
};

Object.setPrototypeOf(children, parent);

function makePerson(name, age) {
  let p = {
    name: name,
    age: age,
    };
    
    Object.setPrototypeOf(p, children);
    return p;
}

let p1 = makePerson('')
