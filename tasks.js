'use strict';

function show() {
  console.log(this);
}

show();

const user = {
  name: 'Тима',
  show: function () {
    console.log(this.name);
  },
};

user.show();

const admin = {
  name: 'Admin',
  show: user.show,
};
admin.show();

function User(name) {
  this.name = name;
  return this;
}

const u = new User('Tima');
const u2 = new User('Ne Tima');
console.log(u);
console.log(u2);

function showCall() {
  console.log(this.name);
}
showCall.call({ name: 'Toni' });
