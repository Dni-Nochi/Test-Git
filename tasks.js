const dog = { name: 'dog' };
const cat = { name: 'cat' };

function sayName() {
  console.log(this.name);
}

dog.sayName = sayName;
cat.sayName = sayName;

dog.sayName();
cat.sayName();

// 4)

const obj = {
  name: 'Tima',
  fn: function () {
    console.log(this.name);
    const arrow = () => {
      console.log(this.name);
    };
    return arrow;
  },
};

obj.fn()();

// 5)
const obj2 = {
  name: 'Gg',
  showName: () => {
    console.log(this.name);
  },
};

obj2.showName();

console.log('Пишу из ветки develop');
console.log('Пишу из ветки develop 2');
console.log('develop3');
console.log('develop');
